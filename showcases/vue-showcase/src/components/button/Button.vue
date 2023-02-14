<script setup lang="ts">
import { DBButton } from "../../../../../output/vue/vue3/src";

import { ref } from "vue";
const variant = ref("primary");
</script>

<template>
	<div>
		<h1>Button</h1>
		<div class="button-container">
			<select v-model="variant">
				<option value="primary">primary</option>
				<option value="secondary">secondary</option>
				<option value="ghost">ghost</option>
				<option value="tertiary">tertiary</option>
			</select>

			<DBButton :variant="variant">{{ variant }}</DBButton>
			<DBButton :variant="variant" disabled="true">
				{{ variant }}
			</DBButton>
			<DBButton :variant="variant" icon="account">
				{{ variant }}
			</DBButton>
			<DBButton :variant="variant" icon="account" disabled="true">
				{{ variant }}
			</DBButton>
			<DBButton :variant="variant" icon="account" icntxt="true">
				{{ variant }}
			</DBButton>
			<DBButton
				:variant="variant"
				icon="account"
				disabled="true"
				icntxt="true"
			>
				{{ variant }}
			</DBButton>
			<DBButton :variant="variant" state="loading">
				{{ variant }}
			</DBButton>
		</div>
	</div>
</template>
