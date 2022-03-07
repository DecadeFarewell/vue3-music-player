<template>
  <div :class="bem()">
    <h1 :class="bem('msg-text', { active })">{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { createNamespace } from '@/utils/create';

const [name, bem] = createNamespace('hellworld');

export default {
  name,
  props: {
    msg: String,
  },
  setup() {
    const active = true;
    return {
      bem,
      active,
    };
  },
};
</script>
