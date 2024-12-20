<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
import "@db-ui/components/build/styles/rollup.css";
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
