<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/tabs.json";
import {
	DBTabs,
	DBInfotext,
	DBTabList,
	DBTab,
	DBTabPanel
} from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBTabs" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<div class="w-full">
				<DBInfotext icon="none" size="small" semantic="informational">
					{{ exampleName }}:
				</DBInfotext>
				<DBTabs
					:orientation="exampleProps.orientation"
					:width="exampleProps.width"
					:alignment="exampleProps.alignment"
					:behaviour="exampleProps.behaviour"
					:initialSelectedIndex="exampleProps.initialSelectedIndex"
					:initialSelectedMode="exampleProps.initialSelectedMode"
					:arrowScrollDistance="75"
				>
					<DBTabList>
						<DBTab> Test 1 </DBTab>
						<DBTab> Test 2 </DBTab>
						<DBTab> Test 3 </DBTab>
						<template v-if="exampleProps.overflow">
							<DBTab> Test 4 </DBTab>
							<DBTab> Test 5 </DBTab>
						</template>
					</DBTabList>
					<DBTabPanel> Tab Panel 1 </DBTabPanel>
					<DBTabPanel> Tab Panel 2 </DBTabPanel>
					<DBTabPanel> Tab Panel 3 </DBTabPanel>
					<template v-if="exampleProps.overflow">
						<DBTabPanel> Tab Panel 4 </DBTabPanel>
						<DBTabPanel> Tab Panel 5 </DBTabPanel>
					</template>
				</DBTabs>
			</div>
		</template>
	</DefaultComponent>
</template>
