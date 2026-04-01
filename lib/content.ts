import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

export function getContent<T = Record<string, unknown>>(slug: string): T {
  const filePath = path.join(contentDir, `${slug}.json`);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

export function saveContent(slug: string, data: unknown): void {
  const filePath = path.join(contentDir, `${slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

export function listContentFiles(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(".json", ""));
}
