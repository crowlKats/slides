import { walk as stdWalk } from "@std/fs";
import { join, relative } from "@std/path";

export async function walk(cb: (path: string) => Promise<void> | void): Promise<void> {
  for await (
    const year of stdWalk(".", {
    maxDepth: 1,
    match: [/\d{4}/],
    includeFiles: false,
  })
    ) {
    for await (const talk of Deno.readDir(year.path)) {
      const path = join(year.path, talk.name);

      await cb(path);
    }
  }
}