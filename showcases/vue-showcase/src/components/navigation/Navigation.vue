<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/navigation.json";
import { DBNavigation, DBNavigationItem } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBNavigation" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<div>
				<h6>{{ exampleName }}</h6>
				<DBNavigation>
					<DBNavigationItem :active="true">
						Navi-Item 1
						<template v-slot:subnavigation>
							<DBNavigationItem :active="true">
								Sub-Navi-Item 1

								<template v-slot:subnavigation>
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
				</DBNavigation>
			</div>
		</template>
	</DefaultComponent>
</template>
