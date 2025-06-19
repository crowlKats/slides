import { walk } from "@std/fs";
import { join, relative } from "@std/path";

for await (
  const year of walk(".", {
    maxDepth: 1,
    match: [/\d{4}/],
    includeFiles: false,
  })
) {
  for await (const talk of Deno.readDir(year.path)) {
    const path = join(year.path, talk.name);
    const command = new Deno.Command(Deno.execPath(), {
      cwd: path,
      args: [
        "run",
        "build",
        "--base",
        `/${relative(Deno.cwd(), path)}/`,
        "--out",
        join(Deno.cwd(), "dist", path),
      ],
    });
    await command.output();
    console.log(`${path} build successfully`);
  }
}
