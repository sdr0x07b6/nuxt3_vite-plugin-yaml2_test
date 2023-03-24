# Nuxt 3 Minimal Starter

This project is to reproduce the problem that occurs when trying to install `vite-plugin-yaml2` in Nuxt v3.


## Setup and run

```sh
yarn && yarn dev
```

## I can't get it to start...?

This project cannot be started as is.
Once you have confirmed that the above startup method fails, rewrite `server/api/yaml.get.ts`. This time it will start.

```ts
// import data from '~/data.yaml';

export default defineEventHandler(() => {
  // return data;
  return 'This is YAML data';
});
```
