<script setup lang="ts">
import {
	DBInfotext,
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTabs
} from "../../../../../output/vue/src";
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
					:contentAlignment="exampleProps?.contentAlignment"
					:behavior="exampleProps?.behavior"
					:initialSelectedIndex="exampleProps?.initialSelectedIndex"
					:initialSelectedMode="exampleProps?.initialSelectedMode"
					:arrowScrollDistance="75"
				>
					<DBTabList>
						<DBTabItem> {{ exampleName }} Tab 1 </DBTabItem>
						<DBTabItem> {{ exampleName }} Tab 2 </DBTabItem>
						<DBTabItem> {{ exampleName }} Tab 3 </DBTabItem>
						<template v-if="exampleProps?.overflow">
							<DBTabItem> {{ exampleName }} Tab 4 </DBTabItem>
							<DBTabItem> {{ exampleName }} Tab 5 </DBTabItem>
						</template>
					</DBTabList>

					<DBTabPanel> {{ exampleName }} Panel 1 </DBTabPanel>
					<DBTabPanel> {{ exampleName }} Panel 2 </DBTabPanel>
					<DBTabPanel> {{ exampleName }} Panel 3 </DBTabPanel>
					<template v-if="exampleProps?.overflow">
						<DBTabPanel> {{ exampleName }} Panel 4 </DBTabPanel>
						<DBTabPanel> {{ exampleName }} Panel 5 </DBTabPanel>
					</template>
				</DBTabs>
			</div>
		</template>
	</DefaultComponent>
</template>
