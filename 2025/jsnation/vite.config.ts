import MarkdownItMagicLink from "markdown-it-magic-link";
import { defineConfig } from "vite";
import "@slidev/cli";

export default defineConfig({
  slidev: {
    markdown: {
      markdownItSetup(md) {
        md.use(MarkdownItMagicLink, {
          linksMap: {
            "Deno": "https://github.com/denoland/deno",
            "JSR": "https://github.com/jsr-io/jsr",
          },
        });
      },
    },
  },
});
