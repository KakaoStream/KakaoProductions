import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import prefetch from "@astrojs/prefetch";
import purgecss from "astro-purgecss";
import robotsTxt from "astro-robots-txt";

import { SITE } from "./src/config";

export default defineConfig({
  site: SITE.origin,
  base: SITE.basePathname,

  integrations: [prefetch(), sitemap(), robotsTxt(), purgecss(), compress()],
});
