import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import '../../showcase-styles.css';
import App from './App.vue';
import './db-ux.css';
import { getRoutes } from './utils/navigation-items';

const routes = getRoutes();

const router = createRouter({
	history: createWebHashHistory('/vue-showcase/'),
	routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');

app.provide('$showcaseVariant', 'vue');
