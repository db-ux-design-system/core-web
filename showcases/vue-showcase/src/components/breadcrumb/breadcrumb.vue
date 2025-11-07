<script setup lang="ts">
// TODO: Uncomment after build-outputs
// import { DBBreadcrumb } from "../../../../../output/vue/src";
import defaultComponentVariants from "../../../../shared/breadcrumb.json";
import DefaultComponent from "../DefaultComponent.vue";

// Temporary placeholder component
const DBBreadcrumb = "nav";
</script>

<template>
	<DefaultComponent title="DBBreadcrumb" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<component
				:is="DBBreadcrumb"
				:class="['db-breadcrumb', exampleProps?.className]"
				:data-size="exampleProps?.size"
				aria-label="breadcrumb"
			>
				<ol class="db-breadcrumb-list" role="list">
					<li
						v-for="(item, index) in exampleProps?.children"
						:key="index"
						:aria-current="item.ariaCurrent"
					>
						<a v-if="item.href" :href="item.href">{{
							item.text
						}}</a>
						<span v-else>{{ item.text }}</span>
					</li>
				</ol>
			</component>
		</template>
	</DefaultComponent>
</template>
