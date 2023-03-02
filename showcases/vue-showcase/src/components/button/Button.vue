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
				<option value="outline">outline</option>
				<option value="primary">primary</option>
				<option value="transparent">transparent</option>
				<option value="semi-transparent">semi-transparent</option>
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
