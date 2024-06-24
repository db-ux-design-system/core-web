<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/navigation.json";
import {
	DBInfotext,
	DBNavigation,
	DBNavigationItem
} from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBNavigation" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<div>
				<DBInfotext
					:id="exampleName"
					size="small"
					semantic="informational"
					icon="none"
				>
					{{ exampleName }}
				</DBInfotext>
				<DBNavigation :labelledBy="exampleName">
					<DBNavigationItem :active="true">
						Navi-Item 1
						<template v-slot:sub-navigation>
							<DBNavigationItem :active="true">
								Sub-Navi-Item 1

								<template v-slot:sub-navigation>
									<DBNavigationItem :active="true">
										<a href="#">Sub-Sub-Navi-Item 1</a>
									</DBNavigationItem>
									<DBNavigationItem>
										<a href="#">Sub-Sub-Navi-Item 2</a>
									</DBNavigationItem>
								</template>
							</DBNavigationItem>
							<DBNavigationItem>
								<a href="#">Sub-Navi-Item 2</a>
							</DBNavigationItem>
						</template>
					</DBNavigationItem>
					<DBNavigationItem icon="user">
						<a href="#">Navi-Item 2</a>
					</DBNavigationItem>
					<DBNavigationItem :disabled="true">
						<a href="#">Navi-Item 3</a>
					</DBNavigationItem>
				</DBNavigation>
			</div>
		</template>
	</DefaultComponent>
</template>
