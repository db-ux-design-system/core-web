<script setup lang="ts">
import { DBTabItem, DBTabList } from "../../../../../output/vue/src";
import defaultComponentVariants from "../../../../shared/tab-item.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent title="DBTabItem" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBTabList
				><DBTabItem
					:active="exampleProps?.active"
					:noText="exampleProps?.noText"
					:icon="exampleProps?.icon"
					:iconTrailing="exampleProps?.iconTrailing"
					:showIcon="exampleProps?.showIcon"
					:showIconTrailing="exampleProps?.showIconTrailing"
					:isDisabled="exampleProps?.disabled"
				>
					{{ exampleName }}
				</DBTabItem>
			</DBTabList>
		</template>
	</DefaultComponent>
</template>
