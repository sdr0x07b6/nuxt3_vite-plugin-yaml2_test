// @ts-expect-error
import pluginYaml from 'vite-plugin-yaml2';

export default defineNuxtConfig({
  vite: {
    plugins: [pluginYaml()],
  },
});
