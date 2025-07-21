import { walk } from "./util.ts";
import { walk as stdWalk } from "@std/fs";

for await (
  const theme of stdWalk("themes", {
    maxDepth: 1,
    includeFiles: false,
  })
) {
  const command = new Deno.Command(Deno.execPath(), {
    cwd: theme.path,
    args: ["install"],
  });
  await command.output();
}

await walk(async (path) => {
  const command = new Deno.Command(Deno.execPath(), {
    cwd: path,
    args: [
      "install",
    ],
  });
  const output = await command.output();
  if (output.success) {
    console.log(`${path} install successfully`);
  } else {
    console.log(`${path} install failed`);
    console.log("--- stderr ---");
    console.log(new TextDecoder().decode(output.stderr));
    console.log();
    console.log("--- out ---");
    console.log(new TextDecoder().decode(output.stdout));
    Deno.exit(1);
  }
});
