<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
import "@db-ui/components/build/styles/db-ui-42-rollup.css";
import "@db-ui/foundations/build/css/colors/classes/all.css";
import "../../showcase-styles.css";
import { provide } from "vue";

provide("$showcaseVariant", "nuxt");
</script>

<style>
#__nuxt,
#__nuxt > div {
	block-size: 100%;
}
</style>
