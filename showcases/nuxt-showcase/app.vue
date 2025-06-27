<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
import "@db-ux/core-components/build/styles/rollup.css";
import "@db-ux/db-theme/build/styles/rollup.css";
import { provide } from "vue";
import "../../showcase-styles.css";

provide("$showcaseVariant", "nuxt");
</script>

<style>
#__nuxt,
#__nuxt > div {
	block-size: 100%;
}
</style>
