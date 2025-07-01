<script setup lang="ts">
import { type RouteRecordRaw, useRoute } from "vue-router";
// import { getRoutes } from "~/src/utils/navigation-items";
import { ref } from "vue";
import { getRoutes } from "../../vue-showcase/src/utils/navigation-items";

const currentRoute = useRoute();
const currentRouteData = ref<null | RouteRecordRaw>(null);

currentRouteData.value =
	getRoutes().find((route) => route.path === currentRoute.path) ?? null;
</script>

<template>
	<div v-if="currentRouteData">
		<component
			v-if="currentRouteData.component"
			:is="currentRouteData.component"
		></component>
	</div>
	<div v-else>
		<h1>404</h1>
	</div>
</template>
