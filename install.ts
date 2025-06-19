import { walk } from "./util.ts";

await walk(async (path) => {
  const command = new Deno.Command(Deno.execPath(), {
    cwd: path,
    args: [
      "install",
    ],
  });
  await command.output();
  console.log(`${path} installed successfully`);
});