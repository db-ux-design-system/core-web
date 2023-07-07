<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/navigation-item.json";
import { DBNavigationItem } from "../../../../../output/vue/vue3/src";

const log = (exampleName: string) => {
	// eslint-disable-next-line no-alert
	alert(exampleName);
};
</script>

<template>
	<DefaultComponent
		title="DBNavigationItem"
		:variants="defaultComponentVariants"
	>
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBNavigationItem
				:icon="exampleProps.icon"
				:width="exampleProps.width"
				:disabled="exampleProps.disabled"
				:active="exampleProps.active"
				:areaPopup="exampleProps.areaPopup"
				@click="log(exampleName)"
			>
				<template v-if="exampleProps.areaPopup" #sub-navigation>
					<DBNavigationItem><a href="#">Test1</a></DBNavigationItem>
					<DBNavigationItem><a href="#">Test2</a></DBNavigationItem>
					<DBNavigationItem><a href="#">Test3</a></DBNavigationItem>
				</template>
				<template v-if="exampleProps.areaPopup">
					{{ exampleName }}
				</template>
				<a v-if="!exampleProps.areaPopup" href="#">{{ exampleName }}</a>
			</DBNavigationItem>
		</template>
	</DefaultComponent>
</template>
