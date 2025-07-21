<script setup lang="ts">
import { DBDivider, DBInfotext } from "@components";
import defaultComponentVariants from "../../../../shared/divider.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent title="DBDivider" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBInfotext size="small" semantic="informational">
				{{ exampleName }}</DBInfotext
			>
			<DBDivider
				:variant="exampleProps?.variant"
				:emphasis="exampleProps?.emphasis"
				:width="exampleProps?.width"
			/>
		</template>
	</DefaultComponent>
</template>
