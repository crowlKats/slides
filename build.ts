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
  const output = await command.output();
  if (output.success) {
    console.log(`${path} build successfully`);
  } else {
    console.log(`${path} build failed`);
    console.log("--- stderr ---");
    console.log(new TextDecoder().decode(output.stderr));
    console.log();
    console.log("--- out ---");
    console.log(new TextDecoder().decode(output.stdout));
    Deno.exit(1);
  }
});
