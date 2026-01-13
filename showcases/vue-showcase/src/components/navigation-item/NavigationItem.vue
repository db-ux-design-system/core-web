<script setup lang="ts">
import { DBNavigationItem } from "@components";
import defaultComponentVariants from "../../../../shared/navigation-item.json";
import DefaultComponent from "../DefaultComponent.vue";

const log = (exampleName?: string) => {
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
			<ul class="nav-item-list">
				<DBNavigationItem
					:icon="exampleProps?.icon"
					:showIcon="exampleProps?.showIcon"
					:disabled="exampleProps?.disabled"
					:active="exampleProps?.active"
					:areaPopup="exampleProps?.areaPopup"
					@click="log(exampleName)"
				>
					<template v-if="exampleProps?.areaPopup" #sub-navigation>
						<DBNavigationItem
							:icon="exampleProps?.icon"
							:showIcon="exampleProps?.showIcon"
						>
							Also a navigation item with longer label
							<template v-slot:sub-navigation>
								<DBNavigationItem
									:icon="exampleProps?.icon"
									:showIcon="exampleProps?.showIcon"
								>
									<a href="#">Navigation Item 2</a>
								</DBNavigationItem>
							</template>
						</DBNavigationItem>
						<DBNavigationItem
							:icon="exampleProps?.icon"
							:showIcon="exampleProps?.showIcon"
							><a href="#">Navigation Item 1</a></DBNavigationItem
						>
					</template>
					<template v-if="exampleProps?.areaPopup">
						{{ exampleName }}
					</template>
					<a v-if="!exampleProps?.areaPopup" href="#">{{
						exampleName
					}}</a>
				</DBNavigationItem>
			</ul>
		</template>
	</DefaultComponent>
</template>
