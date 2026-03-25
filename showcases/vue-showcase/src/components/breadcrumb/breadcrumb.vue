<script setup lang="ts">
import { DBBreadcrumb } from "../../../../../output/vue/src";
import CardWrapperShowcase from "../../../../../output/vue/src/shared/showcase/card-wrapper.showcase.vue";
import ContainerWrapperShowcase from "../../../../../output/vue/src/shared/showcase/container-wrapper.showcase.vue";
import LinkWrapperShowcase from "../../../../../output/vue/src/shared/showcase/link-wrapper.showcase.vue";
import defaultComponentVariants from "../../../../patternhub/data/breadcrumb.json";
</script>

<template>
	<ContainerWrapperShowcase title="DBBreadcrumb">
		<LinkWrapperShowcase
			v-for="variant in defaultComponentVariants"
			:key="variant.name"
			:exampleName="variant.name"
		>
			<CardWrapperShowcase>
				<div
					v-for="example in variant.examples"
					:key="`${variant.name}-${example.name}`"
					:class="example.className"
				>
					<DBBreadcrumb
						:size="example.props?.size"
						:separator="example.props?.separator"
						:maxItems="example.props?.maxItems"
						:items="example.props?.items"
						:ariaLabel="example.props?.ariaLabel"
						:ellipsisAriaLabel="example.props?.ellipsisAriaLabel"
						:className="example.props?.className"
						:id="example.props?.id"
					/>
				</div>
			</CardWrapperShowcase>
		</LinkWrapperShowcase>
	</ContainerWrapperShowcase>
</template>
