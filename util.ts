import { walk as stdWalk } from "@std/fs";
import { join } from "@std/path";

export async function walk(
  cb: (path: string) => Promise<void>,
): Promise<void> {
  const years: string[] = [];
  for await (
    const year of stdWalk(".", {
      maxDepth: 1,
      match: [/\d{4}/],
      includeFiles: false,
    })
  ) {
    years.push(year.path);
  }

  const yearPromises = years.map(async (yearPath) => {
    const talks: string[] = [];
    for await (const talk of Deno.readDir(yearPath)) {
      const path = join(yearPath, talk.name);
      talks.push(path);
    }

    // Process all talks concurrently
    const talkPromises = talks.map((path) => cb(path));
    await Promise.all(talkPromises);
  });

  // Wait for all year processing to complete
  await Promise.all(yearPromises);
}
