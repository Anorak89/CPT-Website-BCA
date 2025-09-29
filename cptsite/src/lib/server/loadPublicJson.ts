export async function loadPublicJson<T = unknown>(relativePath: string): Promise<T> {
  const [{ readFile }, { join }] = await Promise.all([
    import("fs/promises"),
    import("path"),
  ]);
  const filePath = join(process.cwd(), "public", "data", relativePath);
  const raw = await readFile(filePath, "utf-8");
  return JSON.parse(raw) as T;
}


