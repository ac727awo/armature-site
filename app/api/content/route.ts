import { NextResponse } from "next/server";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_REPO = process.env.GITHUB_REPO || "ac727awo/armature-site";
const GITHUB_BRANCH = process.env.GITHUB_BRANCH || "cms";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "armature2026";

async function githubApi(path: string, options: RequestInit = {}) {
  const res = await fetch(`https://api.github.com/repos/${GITHUB_REPO}${path}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v3+json",
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });
  if (!res.ok) {
    const error = await res.text();
    throw new Error(`GitHub API error: ${res.status} ${error}`);
  }
  return res.json();
}

// GET: Read a content file
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const file = searchParams.get("file");
  const password = searchParams.get("password");

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!file) {
    // List all content files
    try {
      const data = await githubApi(`/contents/content?ref=${GITHUB_BRANCH}`);
      const files = data
        .filter((f: { name: string }) => f.name.endsWith(".json"))
        .map((f: { name: string }) => f.name.replace(".json", ""));
      return NextResponse.json({ files });
    } catch {
      return NextResponse.json({ error: "Failed to list files" }, { status: 500 });
    }
  }

  try {
    const data = await githubApi(`/contents/content/${file}.json?ref=${GITHUB_BRANCH}`);
    const content = JSON.parse(Buffer.from(data.content, "base64").toString("utf-8"));
    return NextResponse.json({ content, sha: data.sha });
  } catch {
    return NextResponse.json({ error: "Failed to read file" }, { status: 500 });
  }
}

// POST: Save a content file (commits to GitHub → triggers Vercel redeploy)
export async function POST(request: Request) {
  const body = await request.json();
  const { file, content, sha, password } = body;

  if (password !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!file || !content) {
    return NextResponse.json({ error: "Missing file or content" }, { status: 400 });
  }

  if (!GITHUB_TOKEN) {
    return NextResponse.json(
      { error: "GITHUB_TOKEN not configured. Set it in Vercel environment variables." },
      { status: 500 }
    );
  }

  try {
    const encoded = Buffer.from(JSON.stringify(content, null, 2)).toString("base64");
    const result = await githubApi(`/contents/content/${file}.json`, {
      method: "PUT",
      body: JSON.stringify({
        message: `CMS: Update ${file} content`,
        content: encoded,
        sha,
        branch: GITHUB_BRANCH,
      }),
    });
    return NextResponse.json({ success: true, sha: result.content.sha });
  } catch (err) {
    return NextResponse.json(
      { error: `Failed to save: ${err instanceof Error ? err.message : "Unknown error"}` },
      { status: 500 }
    );
  }
}
