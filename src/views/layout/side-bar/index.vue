<template>
  <div :class="bem()">side bar</div>
</template>
<script lang="ts">
import { createNamespace } from '@/utils/create';

const [name, bem] = createNamespace('side-bar');
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
@b: kw-side-bar;

.@{b}{
  width: 270px;
  height: 100vh;
  border: 1px solid #000;
}
</style>
