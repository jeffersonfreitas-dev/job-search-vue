import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleUp, faAngleDown ,faSearch } from '@fortawesome/free-solid-svg-icons';
import router from "@/router";
import App from './App.vue'

import "@/index.css";

library.add(faAngleUp);
library.add(faAngleDown);
library.add(faSearch);

const pinia = createPinia();

createApp(App).use(pinia).use(router).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
