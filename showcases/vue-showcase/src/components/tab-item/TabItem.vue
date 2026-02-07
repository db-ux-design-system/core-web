<script setup lang="ts">
import { DBTabItem, DBTabList } from "@db-ux/v-core-components/src";
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
					:disabled="exampleProps?.disabled"
				>
					{{ exampleName }}
				</DBTabItem>
			</DBTabList>
		</template>
	</DefaultComponent>
</template>
