import data from '~/data.yaml';

export default defineEventHandler(() => {
  return data;
  // return 'YAML data';
});
