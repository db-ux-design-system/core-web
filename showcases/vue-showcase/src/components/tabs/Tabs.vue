<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/tabs.json";
import {
	DBTabs,
	DBInfotext,
	DBTabList,
	DBTab,
	DBTabPanel
} from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBTabs" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<div class="w-full">
				<DBInfotext icon="none" size="small" variant="informational">
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
						<DBTab :name="exampleName" :index="0"> Test 1 </DBTab>
						<DBTab :name="exampleName" :index="1"> Test 2 </DBTab>
						<DBTab :name="exampleName" :index="2"> Test 3 </DBTab>
						<template v-if="exampleProps.overflow">
							<DBTab :name="exampleName" :index="3">
								Test 4
							</DBTab>
							<DBTab :name="exampleName" :index="4">
								Test 5
							</DBTab></template
						>
					</DBTabList>
					<DBTabPanel :name="exampleName" :index="0">
						Tab Panel 1
					</DBTabPanel>
					<DBTabPanel :name="exampleName" :index="1">
						Tab Panel 2
					</DBTabPanel>
					<DBTabPanel :name="exampleName" :index="2">
						Tab Panel 3
					</DBTabPanel>
					<template v-if="exampleProps.overflow">
						<DBTabPanel :name="exampleName" :index="3">
							Tab Panel 4
						</DBTabPanel>
						<DBTabPanel :name="exampleName" :index="4">
							Tab Panel 5
						</DBTabPanel>
					</template>
				</DBTabs>
			</div>
		</template>
	</DefaultComponent>
</template>
