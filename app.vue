<script lang="ts" setup>
import data from '~/data.yaml';

const onFetch = () => {
  const { data } = useFetch('/api/yaml');
  console.log(data.value);
};
</script>

<template>
  <div>
    <button @click="onFetch">Fetch</button>
    <pre>
      {{ data }}
    </pre>
  </div>
</template>
