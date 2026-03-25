<script setup lang="ts">
import { DBBreadcrumbItem } from "../../../../../output/vue/src";
import CardWrapperShowcase from "../../../../../output/vue/src/shared/showcase/card-wrapper.showcase.vue";
import ContainerWrapperShowcase from "../../../../../output/vue/src/shared/showcase/container-wrapper.showcase.vue";
import LinkWrapperShowcase from "../../../../../output/vue/src/shared/showcase/link-wrapper.showcase.vue";
import defaultComponentVariants from "../../../../patternhub/data/breadcrumb-item.json";
</script>

<template>
	<ContainerWrapperShowcase title="DBBreadcrumbItem">
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
					<nav class="db-breadcrumb" aria-label="Breadcrumb">
						<ol>
							<DBBreadcrumbItem
								:href="example.props?.href"
								:text="example.props?.text"
								:icon="example.props?.icon"
								:ariaCurrent="example.props?.ariaCurrent"
								:disabled="example.props?.disabled"
								:className="example.props?.className"
								:id="example.props?.id"
							/>
						</ol>
					</nav>
				</div>
			</CardWrapperShowcase>
		</LinkWrapperShowcase>
	</ContainerWrapperShowcase>
</template>
