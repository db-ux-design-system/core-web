<script setup lang="ts">
import { DBBreadcrumb } from "../../../../../output/vue/src";
import defaultComponentVariants from "../../../../shared/breadcrumb.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent title="DBBreadcrumb" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBBreadcrumb
				:size="exampleProps?.size"
				:separator="exampleProps?.separator"
				:maxItems="exampleProps?.maxItems"
				:items="exampleProps?.items"
				:ariaLabel="exampleProps?.ariaLabel"
				:ellipsisAriaLabel="exampleProps?.ellipsisAriaLabel"
				:className="exampleProps?.className"
				:id="exampleProps?.id"
			/>
		</template>
	</DefaultComponent>
</template>
