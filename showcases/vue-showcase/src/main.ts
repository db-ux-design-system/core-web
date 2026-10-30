import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import '../../showcase-styles.css';
import App from './App.vue';
// `db-ux*.css` is no longer imported statically here; `App.vue` swaps the active
// stylesheet at runtime based on the `coloring` mode.
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
