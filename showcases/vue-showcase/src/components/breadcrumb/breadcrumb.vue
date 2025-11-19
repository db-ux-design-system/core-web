<script setup lang="ts">
// TODO: Uncomment after build-outputs
// import { DBBreadcrumb } from "../../../../../output/vue/src";
import { ref } from "vue";
import defaultComponentVariants from "../../../../shared/breadcrumb.json";
import DefaultComponent from "../DefaultComponent.vue";

// Temporary placeholder component
const DBBreadcrumb = "nav";

// Track expanded state for each example
const isExpanded = ref<Record<string, boolean>>({});

const toggleExpanded = (key: string) => {
	isExpanded.value[key] = !isExpanded.value[key];
};
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
				:data-separator="exampleProps?.separator"
				aria-label="breadcrumb"
			>
				<ol class="db-breadcrumb-list" role="list">
					<template
						v-if="
							exampleProps?.maxItems &&
							exampleProps.children.length >
								exampleProps.maxItems &&
							!isExpanded[`${variantIndex}-${exampleIndex}`]
						"
					>
						<!-- Collapsed view: first item + ellipsis + last items -->
						<li v-if="exampleProps.children[0]">
							<a
								v-if="exampleProps.children[0].href"
								:href="exampleProps.children[0].href"
								>{{ exampleProps.children[0].text }}</a
							>
							<span
								v-else
								:aria-current="
									exampleProps.children[0].ariaCurrent
								"
								>{{ exampleProps.children[0].text }}</span
							>
						</li>

						<!-- Ellipsis button -->
						<li>
							<button
								type="button"
								class="db-breadcrumb-ellipsis"
								aria-label="Alle Breadcrumb-Einträge anzeigen"
								@click="
									toggleExpanded(
										`${variantIndex}-${exampleIndex}`
									)
								"
							>
								…
							</button>
						</li>

						<!-- Last (maxItems - 1) items -->
						<li
							v-for="(item, index) in exampleProps.children.slice(
								-(exampleProps.maxItems - 1)
							)"
							:key="index"
						>
							<a v-if="item.href" :href="item.href">{{
								item.text
							}}</a>
							<span v-else :aria-current="item.ariaCurrent">{{
								item.text
							}}</span>
						</li>
					</template>
					<template v-else>
						<!-- All items (normal or expanded view) -->
						<li
							v-for="(item, index) in exampleProps?.children"
							:key="index"
						>
							<a v-if="item.href" :href="item.href">{{
								item.text
							}}</a>
							<span v-else :aria-current="item.ariaCurrent">{{
								item.text
							}}</span>
						</li>
					</template>
				</ol>
			</component>
		</template>
	</DefaultComponent>
</template>
