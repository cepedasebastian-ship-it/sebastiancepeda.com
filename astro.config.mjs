import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  // Set this to your final domain when you deploy, e.g. 'https://sebastiancepeda.com'
  site: 'https://sebastiancepeda.com',
  build: {
    // Inline all CSS into the HTML — removes the render-blocking stylesheet request.
    inlineStylesheets: 'always',
  },
});
