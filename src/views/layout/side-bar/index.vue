<template>
  <div :class="bem()">
    <Logo />

    <Navigator />

    <ProjectInfo />
  </div>
</template>
<script lang="ts">
import { createNamespace } from '@/utils/create';
import Logo from './components/logo.vue';
import Navigator from './components/navigator.vue';
import ProjectInfo from './components/project-info.vue';

const [name, bem] = createNamespace('side-bar');
export default {
  name,
  components: {
    Logo,
    Navigator,
    ProjectInfo,
  },
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
  box-sizing: border-box;
  padding-top: 25px;
}
</style>
