<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/main-navigation.json";
import {
	DBMainNavigation,
	DBNavigationItem
} from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent
		title="DBMainNavigation"
		:variants="defaultComponentVariants"
	>
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<div>
				<h6>{{ exampleName }}</h6>
				<DBMainNavigation>
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
					<DBNavigationItem icon="account">
						<a href="#">Navi-Item 2</a>
					</DBNavigationItem>
					<DBNavigationItem :disabled="true">
						<a href="#">Navi-Item 3</a>
					</DBNavigationItem>
				</DBMainNavigation>
			</div>
		</template>
	</DefaultComponent>
</template>
