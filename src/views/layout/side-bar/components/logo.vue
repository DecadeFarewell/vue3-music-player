<template>
  <div :class="bem()">
    <img :class="bem('image')" src="@/assets/images/logo.jpg" alt="logo" />
  </div>
</template>
<script lang="ts">
import { createNamespace } from '@/utils/create';

const [name, bem] = createNamespace('logo');
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
@b: kw-logo;

.@{b}{
  &__image {
    width: 145px;
    height: 60px;
    display: block;
    margin: 0 auto;
  }
}
</style>
