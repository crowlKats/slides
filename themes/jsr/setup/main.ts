import { defineAppSetup } from "@slidev/types";
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";

export default defineAppSetup(({ app }) => {
  app.use(Particles, {
    init: async (engine) => {
      await loadFull(engine);
    },
  });
});
