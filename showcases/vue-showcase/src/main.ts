import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import '@db-ui/components/build/styles/db-ui-42-rollup.css';
import '@db-ui/foundations/build/css/color-classes.css';
import '../../showcase-styles.css';
import App from './App.vue';
import { getRoutes } from './utils/navigation-items';

const routes = getRoutes();

const router = createRouter({
	history: createWebHashHistory('/vue-showcase/'),
	routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
