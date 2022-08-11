import sveltePreprocess from 'svelte-preprocess';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const production = process.env.IS_DEV !== 'true';

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({
    postcss: {
      plugins: [
        tailwind,
        autoprefixer
      ]
    },
    typescript: {
        sourceMap: !production,
        inlineSources: !production,
        tsconfigFile: "./packages/renderer/tsconfig.json",
    },
  }),
};
