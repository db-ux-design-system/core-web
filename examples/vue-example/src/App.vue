<script setup lang="ts">
import { DBButton } from "@db-ui/v-components";
</script>

<template>
	<main>
		<div class="db-ui-functional db-bg-neutral-3 container-with-padding">
			<h1>db-ui-functional</h1>
			<p>Use this as default for enterprise apps</p>
			<DBButton icon="account">Test</DBButton>
		</div>
		<div class="db-ui-regular db-bg-success container-with-padding">
			<h1>db-ui-regular</h1>
			<p>Use this as default for consumer apps</p>
			<DBButton icon="account">Test</DBButton>
		</div>
		<div
			class="db-ui-expressive db-bg-success-light container-with-padding"
		>
			<h1>db-ui-expressive</h1>
			<p>Use this as default for marketing apps</p>
			<DBButton icon="account">Test</DBButton>
		</div>
	</main>
</template>
