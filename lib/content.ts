import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getContent(name: string): any {
  const filePath = path.join(contentDir, `${name}.json`);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

export function getAllContent(): { name: string; data: Record<string, unknown> }[] {
  if (!fs.existsSync(contentDir)) return [];
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => ({
      name: f.replace(".json", ""),
      data: JSON.parse(fs.readFileSync(path.join(contentDir, f), "utf-8")),
    }));
}
