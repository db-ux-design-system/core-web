<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/tab-item.json";
import { DBTabItem } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBTabItem" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBTabItem
				:active="exampleProps.active"
				:noText="exampleProps.noText"
				:icon="exampleProps.icon"
				:iconAfter="exampleProps.iconAfter"
				:disabled="exampleProps.disabled"
			>
				{{ exampleName }}
			</DBTabItem>
		</template>
	</DefaultComponent>
</template>
