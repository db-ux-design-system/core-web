<script setup lang="ts">
import { DBLink } from "../../../../../output/vue/src";
import defaultComponentVariants from "../../../../shared/link.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent title="DBLink" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBLink
				:variant="exampleProps?.variant"
				:href="exampleProps?.href"
				:disabled="exampleProps?.disabled"
				:size="exampleProps?.size"
				:content="exampleProps?.content"
				:showIcon="exampleProps?.showIcon"
				:wrap="exampleProps?.wrap"
			>
				{{ exampleName }}
			</DBLink>
		</template>
	</DefaultComponent>
</template>
