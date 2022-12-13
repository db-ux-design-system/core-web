<script setup lang="ts">
import { DBButton, DBIcon, DBCard } from "../../../output/vue/vue3/src";
</script>

<template>
	<main>
		<h1>Vue</h1>
		<DBCard>
			<div style="display: flex; gap: 4px; align-items: center">
				<DBButton variant="secondary">Test</DBButton>
				<DBButton text="Test" icon="account" />
				<DBIcon icon="account" />
			</div>
		</DBCard>
	</main>
</template>
