<template>
  <div :class="bem()">
    <a-input
      v-model:value="search"
      placeholder="请输入歌名、歌词、歌手或者专辑"
      :class="bem('search-input')"
      @input="onInputkeyWord"
      @keydown.enter="onSearch"
    >
      <template #suffix>
        <SearchOutlined @click="onSearch" />
      </template>
    </a-input>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { createNamespace } from '@/utils/create';
import { SearchOutlined } from '@ant-design/icons-vue';

const [name, bem] = createNamespace('search');
export default {
  name,
  components: {
    SearchOutlined,
  },
  setup() {
    const search = ref<string>('');

    const onSearch = () => {
      console.log('onSearch: ', 1111);
    };

    const onInputkeyWord = () => {
      console.log('onInputkeyWord: ', 1111);
    };
    return {
      bem,
      search,
      onSearch,
      onInputkeyWord,
    };
  },
};
</script>
<style lang="less" scoped>
@b: kw-search;

.@{b}{
  display: flex;
  justify-content: flex-end;
  &__search-input {
    width: 290px;
    height: 32px;
  }
  &__icon-demo {
    width: 20px;
  }
}
</style>
