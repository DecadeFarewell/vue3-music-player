<template>
  <div :class="bem()">
    <SideBar :class="bem('side-bar')" />
    <section :class="bem('main')">
      <Header />
      <div :class="bem('content')">
        <ul>
          <li v-for="song in songs" :key="song.id">{{ song.name }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { onMounted, ref } from 'vue';
import Api from '@/apis/index';
import { createNamespace } from '@/utils/create';
import SideBar from '../layout/side-bar/index.vue';
import Header from '../layout/header/index.vue';

const [name, bem] = createNamespace('home');
export default {
  name,
  components: {
    SideBar,
    Header,
  },
  setup() {
    const songs = ref<any>([]);
    const getData = async () => {
      const data = await Api.getRecommendSongs({
        limit: 35,
      });
      songs.value = data;
    };

    onMounted(() => {
      getData();
    });
    return {
      bem,
      songs,
    };
  },
};
</script>
<style lang="less" scoped>
@b: kw-home;

.@{b} {
  display: flex;
  &__main {
    flex: 1 1 auto;
    border: 1px solid #000;
  }
}
</style>
