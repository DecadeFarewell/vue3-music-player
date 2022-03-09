<template>
  <div :class="bem()">
    <ul :class="bem('nav')">
      <li
        :class="bem('nav-item', { active: activeNav === nav.path })"
        v-for="nav in navConfig"
        :key="nav.path"
        @click="navigator(nav.path)"
      >
        <i :class="['iconfont', `icon-${nav.icon}`]"></i>
        <span :class="bem('title')">{{ nav.title }}</span>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { createNamespace } from '@/utils/create';
import { useRoute, useRouter } from 'vue-router';
import { computed } from 'vue';
import navConfig from './navigator';

const [name, bem] = createNamespace('side-navigator');
export default {
  name,
  components: {},
  setup() {
    const router = useRouter();
    const route = useRoute();

    const activeNav = computed(() => route.path);

    const navigator = (path = '/') => router.push(path);

    return {
      bem,
      navConfig,
      activeNav,
      navigator,
    };
  },
};
</script>
<style lang="less" scoped>
@b: kw-side-navigator;

.@{b} {
  padding-top: 40px;
  &__nav {
    width: 200px;
    margin: 0 auto;
    &-item {
      display: block;
      padding: 10px 16px;
      color: var(--color-text-main);
      border-radius: 8px;
      text-align: left;
      font-weight: 300;
      cursor: pointer;
      .iconfont {
        display: inline-flex;
        width: 32px;
        height: 32px;
        background-color: #fff;
        box-shadow: 0 4px 6px rgb(0 0 0 / 12%);
        border-radius: 6px;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        font-size: 18px;
        // color: #636c78;
        vertical-align: top;
      }
      .@{b}__title {
        display: inline-block;
        line-height: 32px;
      }
      &--active {
        font-weight: 400;
        background-color: #fff;
        box-shadow: 0 20px 27px rgba(0, 0, 0, 0.05);

        .iconfont {
          color: #fff;
          background-color: var(--color-text-height);
        }
      }
    }
  }
}
</style>
