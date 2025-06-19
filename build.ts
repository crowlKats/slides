import { join, relative } from "@std/path";
import { walk } from "./util.ts";

await walk(async (path) => {
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
});