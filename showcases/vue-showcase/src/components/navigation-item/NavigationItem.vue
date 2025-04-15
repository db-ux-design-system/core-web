<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/navigation-item.json";
import { DBNavigationItem } from "../../../../../output/vue/src";

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
					:width="exampleProps?.width"
					:disabled="exampleProps?.disabled"
					:active="exampleProps?.active"
					:areaPopup="exampleProps?.areaPopup"
					:wrap="exampleProps?.wrap"
					@click="log(exampleName)"
				>
					<template v-if="exampleProps?.areaPopup" #sub-navigation>
						<ul>
							<DBNavigationItem
								:icon="exampleProps?.icon"
								:showIcon="exampleProps?.showIcon"
								><a href="#">Test1</a></DBNavigationItem
							>
							<DBNavigationItem
								:icon="exampleProps?.icon"
								:showIcon="exampleProps?.showIcon"
								><a href="#">Test2</a></DBNavigationItem
							>
							<DBNavigationItem
								:icon="exampleProps?.icon"
								:showIcon="exampleProps?.showIcon"
								><a href="#">Test3</a></DBNavigationItem
							>
						</ul>
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
