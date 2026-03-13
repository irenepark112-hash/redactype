// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
const isGitHubPages = !!process.env.GITHUB_ACTIONS;

export default defineConfig({
  site: isGitHubPages
    ? 'https://irenepark112-hash.github.io'
    : 'http://localhost:4321',
  base: isGitHubPages ? '/redactype/' : '/',
});
