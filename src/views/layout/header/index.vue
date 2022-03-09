<template>
  <div :class="bem()">
    <Search />

    <a-button type="primary" :class="bem('login-btn')">登录</a-button>
  </div>
</template>
<script lang="ts">
import { createNamespace } from '@/utils/create';
import Search from './components/search.vue';

const [name, bem] = createNamespace('header');
export default {
  name,
  components: {
    Search,
  },
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
  height: 80px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &__login-btn {
    margin-left: 20px;
  }
}
</style>
