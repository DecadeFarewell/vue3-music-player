<template>
  <div :class="bem()">
    <img
      :class="bem('logo')"
      src="https://www.google.com/search?q=%E7%BD%91%E6%98%93%E4%BA%91logo&sxsrf=APq-WBtaA8cN-zEk4MMD75BR1k_FyMdn0g:1646750054631&tbm=isch&source=iu&ictx=1&vet=1&fir=LglVRG3SdL5jIM%252CaQNFAWZHOrpx_M%252C_%253B_XYKolO1a0bOJM%252C8m18x-Do32-wLM%252C_%253BeS5KkWNBVyEG3M%252CEyK11GfLGAXYOM%252C_%253BmlSgNgy0g8u0HM%252CEyK11GfLGAXYOM%252C_%253B8hbVlFwxbg8UvM%252ClOHramWu1dfO8M%252C_%253BuYslaz3HubMZlM%252CDAg_QmgvzOyWiM%252C_%253BT2QXivUOJIuIaM%252Cbnw_v5PJa0SoTM%252C_%253Bdo5BdU5z-6WDLM%252CEyK11GfLGAXYOM%252C_%253BcmiNSh4U7RINJM%252CTuJ1C1MzunfTrM%252C_%253B8A9dl3heC9jfHM%252CgbI1reQ8mNzJ_M%252C_%253Brny_TkmHjYXUMM%252Cyp_F9Wrm7I2IAM%252C_%253BcSfrfBWwLNeiPM%252C-oKOf0_hKqkQtM%252C_%253BT2ZeCsfkEZ_GFM%252CvIqlVTgLQbVhYM%252C_&usg=AI4_-kRYT_QjhIEAWqYsd7KiqiLSE2AzKA&sa=X&ved=2ahUKEwiUz6iA3rb2AhUCslYBHWGpCcgQ9QF6BAgfEAE#imgrc=_XYKolO1a0bOJM"
      alt="logo"
    />
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
  &__logo {
    width: 145px;
    height: 60px;
  }
}
</style>
