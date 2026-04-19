import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

function pagesBasePath() {
  const repository = process.env.GITHUB_REPOSITORY;
  if (!repository || process.env.GITHUB_ACTIONS !== "true") {
    return "/";
  }

  const [, repoName] = repository.split("/");
  return repoName ? `/${repoName}/` : "/";
}

export default defineConfig({
  plugins: [vue()],
  base: pagesBasePath(),
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/unit/setup.js"],
    include: ["tests/unit/**/*.spec.js"],
    exclude: ["tests/e2e/**", "node_modules/**"],
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      include: ["src/content/**/*.js", "src/components/**/*.vue", "src/router/**/*.js"],
    },
  },
});
