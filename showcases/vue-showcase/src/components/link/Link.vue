<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/link.json";
import { DBLink } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBLink" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBLink
				:variant="exampleProps.variant"
				:href="exampleProps.href"
				:disabled="exampleProps.disabled"
				:size="exampleProps.size"
				:content="exampleProps.content"
			>
				{{ exampleName }}
			</DBLink>
		</template>
	</DefaultComponent>
</template>
