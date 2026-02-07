<script setup lang="ts">
import {
	DBInfotext,
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTabs
} from "@db-ux/v-core-components/src";
import defaultComponentVariants from "../../../../shared/tabs.json";
import DefaultComponent from "../DefaultComponent.vue";
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
					:orientation="exampleProps?.orientation"
					:width="exampleProps?.width"
					:alignment="exampleProps?.alignment"
					:behavior="exampleProps?.behavior"
					:initialSelectedIndex="exampleProps?.initialSelectedIndex"
					:initialSelectedMode="exampleProps?.initialSelectedMode"
					:arrowScrollDistance="75"
				>
					<DBTabList>
						<DBTabItem> Test 1 </DBTabItem>
						<DBTabItem> Test 2 </DBTabItem>
						<DBTabItem> Test 3 </DBTabItem>
						<template v-if="exampleProps?.overflow">
							<DBTabItem> Test 4 </DBTabItem>
							<DBTabItem> Test 5 </DBTabItem>
						</template>
					</DBTabList>
					<DBTabPanel> Tab Panel 1 </DBTabPanel>
					<DBTabPanel> Tab Panel 2 </DBTabPanel>
					<DBTabPanel> Tab Panel 3 </DBTabPanel>
					<template v-if="exampleProps?.overflow">
						<DBTabPanel> Tab Panel 4 </DBTabPanel>
						<DBTabPanel> Tab Panel 5 </DBTabPanel>
					</template>
				</DBTabs>
			</div>
		</template>
	</DefaultComponent>
</template>
