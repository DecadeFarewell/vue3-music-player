<template>
  <div :class="bem()">
    <h1>page not found</h1>
  </div>
</template>
<script lang="ts">
import { createNamespace } from '@/utils/create';

const [name, bem] = createNamespace('not-found');
export default {
  name,
  components: {},
  setup() {
    return {
      bem,
    };
  },
};
</script>
<style lang="less" scoped></style>
