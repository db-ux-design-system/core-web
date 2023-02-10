import { createApp } from 'vue';
import './index.scss';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import { navigationItems } from './utils/navigation-items';

const routes = navigationItems;

const router = createRouter({
	history: createWebHashHistory('/vue-showcase/'),
	routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
