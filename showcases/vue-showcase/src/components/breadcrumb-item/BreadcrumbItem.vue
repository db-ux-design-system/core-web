<script setup lang="ts">
import { DBBreadcrumbItem } from "../../../../../output/vue/src";
import defaultComponentVariants from "../../../../shared/breadcrumb-item.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent
		title="DBBreadcrumbItem"
		:variants="defaultComponentVariants"
	>
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<nav class="db-breadcrumb" aria-label="Breadcrumb">
				<ol>
					<DBBreadcrumbItem
						:href="exampleProps?.href"
						:text="exampleProps?.text"
						:icon="exampleProps?.icon"
						:ariaCurrent="exampleProps?.ariaCurrent"
						:disabled="exampleProps?.disabled"
						:className="exampleProps?.className"
						:id="exampleProps?.id"
					/>
				</ol>
			</nav>
		</template>
	</DefaultComponent>
</template>
