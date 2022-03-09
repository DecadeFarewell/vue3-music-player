<template>
  <div :class="bem()">
    <div :class="bem('info')">
      <p>Vue3.x 项目代码Git地址：</p>
      <a href="https://github.com/DecadeFarewell/Music-player" target="_blank">Github</a>
    </div>
  </div>
</template>
<script lang="ts">
import { createNamespace } from '@/utils/create';

const [name, bem] = createNamespace('project-info');
export default {
  name,
  setup() {
    return {
      bem,
    };
  },
};
</script>
<style lang="less" scoped>
@b: kw-project-info;

.@{b}{
  display: flex;
  flex-direction: column;
  align-items: center;
  &__info {
  padding: 30px 0;
  font-weight: bold;
  text-align: left;

  p {
    padding-top: 20px;
  }

  a {
    display: block;
    line-height: 24px;
    color: var(--color-text-height);
  }
}
}
</style>
