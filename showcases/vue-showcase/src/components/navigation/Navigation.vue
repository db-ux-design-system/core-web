<script setup lang="ts">
import {
	DBInfotext,
	DBNavigation,
	DBNavigationItem
} from "../../../../../packages/v-core-components/src";
import defaultComponentVariants from "../../../../shared/navigation.json";
import DefaultComponent from "../DefaultComponent.vue";

const getId = (name?: string): string =>
	`${name?.replaceAll(/\W/g, "_").toLowerCase()}`;
</script>

<template>
	<DefaultComponent title="DBNavigation" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<div>
				<DBInfotext
					:id="getId(exampleName)"
					size="small"
					semantic="informational"
					icon="none"
				>
					{{ exampleName }}
				</DBInfotext>
				<DBNavigation :aria-labelledby="getId(exampleName)">
					<DBNavigationItem>
						Navi-Item 1
						<template v-slot:sub-navigation>
							<DBNavigationItem :active="true">
								Sub-Navi-Item 1

								<template v-slot:sub-navigation>
									<DBNavigationItem>
										<a href="#" aria-current="page"
											>Sub-Sub-Navi-Item 1</a
										>
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
					<DBNavigationItem icon="x_placeholder">
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
