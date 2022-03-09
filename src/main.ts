import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/styles/reset.less';
import '@/assets/css/global.css';
import '@/assets/fonts/fonts.css';

createApp(App)
  .use(Antd)
  .use(store)
  .use(router)
  .mount('#app');
