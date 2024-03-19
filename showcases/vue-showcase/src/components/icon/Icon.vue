<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/icon.json";
import { DBIcon, DBInfotext } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBIcon" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBInfotext icon="none" size="small" variant="informational">
				{{ exampleName }}</DBInfotext
			>
			<DBIcon icon="account">
				{{ exampleName }}
			</DBIcon>
		</template>
	</DefaultComponent>
</template>
