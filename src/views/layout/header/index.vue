<template>
  <div :class="bem()">
    <h3>header</h3>
  </div>
</template>
<script lang="ts">
import { createNamespace } from '@/utils/create';

const [name, bem] = createNamespace('header');
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
<style lang="less" scoped>
@b: kw-header;

.@{b}{
  border: 1px solid #000;
  height: 80px;
}
</style>
