import { serveDir, serveFile } from "@std/http/file-server";
import { join } from "@std/path";

const pattern = new URLPattern({
  pathname: "/:year(\\d{4})/:name{/*}?",
});

Deno.serve(async (req) => {
  let resp = await serveDir(req, {
    fsRoot: "dist",
    quiet: true,
  });

  if (resp.status === 404) {
    const res = pattern.exec(req.url);
    if (res) {
      const { year, name } = res.pathname.groups;
      const slideRoot = join("dist", year!, name!);

      resp = await serveFile(req, join(slideRoot, "index.html"));
    } else {
      return new Response("not found", {
        status: 404,
      });
    }
  }

  return resp;
});
