<script setup lang="ts">
import { DBIcon, DBInfotext } from "../../../../../output/vue/src";
import defaultComponentVariants from "../../../../shared/icon.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent title="DBIcon" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBInfotext icon="none" size="small" semantic="informational">
				{{ exampleName }}</DBInfotext
			>
			<DBIcon icon="x_placeholder">
				{{ exampleName }}
			</DBIcon>
		</template>
	</DefaultComponent>
</template>
