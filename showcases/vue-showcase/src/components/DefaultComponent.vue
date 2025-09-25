<script setup lang="ts">
import { inject, type Ref, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { DBCard, DBDivider, DBLink } from "../../../../output/vue/src";
import {
	COLOR,
	COLOR_CONST,
	DENSITY,
	DENSITY_CONST
} from "../../../../packages/components/src/shared/constants";
import type {
	DefaultComponentExample,
	DefaultComponentProps,
	DefaultComponentVariants
} from "../../../shared/default-component-data";

interface DefaultExample extends DefaultComponentExample {
	name?: string;
	example?: any;
	style?: {
		display?: string;
		width?: string;
		height?: string;
	};
	className?: string;
	props?: any;
	code?: {
		html?: string; // We will generate this with reacts 'renderToString'
		angular?: string;
		react?: string;
		vue?: string;
	};
	children?: DefaultExample[];
	density?: string;
}
interface DefaultVariants extends DefaultComponentVariants {
	name: string;
	children?: DefaultExample[];
	examples: DefaultExample[];
	slotCode?: any;
}
/* Workaround see: https://vuejs.org/guide/typescript/composition-api.html#typing-component-props */
interface DefaultProps extends DefaultComponentProps {
	title: string;
	variants: DefaultVariants[];
}

const props = defineProps<DefaultProps>();

const route = useRoute();

const variantRef: Ref<DefaultVariants | undefined> = ref();
const variantRefIndex: Ref<number> = ref(-1);
const showcaseVariant = inject("$showcaseVariant");
const color = ref(COLOR.NEUTRAL_BG_LEVEL_1);

watch(
	() => route.query,
	async (query: any) => {
		if (query[COLOR_CONST] && query[COLOR_CONST] !== color.value) {
			color.value = query[COLOR_CONST];
		}
	}
);

if (route.query.page) {
	const foundVariant = props.variants.find(
		(variant) => variant.name.toLowerCase() === route.query.page
	);

	variantRef.value = foundVariant;
	if (foundVariant) {
		variantRefIndex.value = props.variants.indexOf(foundVariant);
	}
}

const createLinkFromVariantAndUrl = (variantName: string) => {
	let currentUrl = window.location.href;

	if (!currentUrl.includes("?")) {
		currentUrl += "?";
	}
	if (!currentUrl.includes("color=")) {
		currentUrl += `&color=${route.query[COLOR_CONST] || COLOR.NEUTRAL_BG_LEVEL_1}`;
	}
	if (!currentUrl.includes("density=")) {
		currentUrl += `&density=${route.query[DENSITY_CONST] || DENSITY.REGULAR}`;
	}
	return `${currentUrl}&page=${variantName.toLowerCase()}`;
};

const getLink = (variantName: string) => {
	return window && showcaseVariant === "vue"
		? createLinkFromVariantAndUrl(variantName)
		: "";
};

const openVariantLink = (event: MouseEvent, variantName: string) => {
	if (window) {
		event.preventDefault();
		window.open(createLinkFromVariantAndUrl(variantName), "_blank");
	}
};

const getElevation = (): "1" | "2" | "3" =>
	color.value.includes("3") ? "3" : color.value.includes("2") ? "2" : "1";
</script>

<template>
	<!-- TODO: Slots not working for nested components? -> Had to copy paste variant-cards...	-->
	<DBCard
		v-if="variantRef"
		class="variants-card"
		:elevation-level="getElevation()"
	>
		<div
			:role="variantRef.role"
			:aria-label="variantRef.role ? variantRef.name : undefined"
			class="variants-list"
		>
			<div
				v-for="(example, exampleIndex) in variantRef.examples"
				:style="example.style"
				:class="example.className"
				:data-density="example.density"
			>
				<slot
					name="example"
					v-bind:exampleProps="example.props ?? {}"
					v-bind:exampleName="example.name"
					v-bind:exampleIndex="exampleIndex"
					v-bind:variantIndex="variantRefIndex"
				></slot>
			</div>
		</div>
	</DBCard>
	<div v-if="!variantRef" class="default-container">
		<div class="component-header">
			<h1>{{ title }}</h1>
		</div>
		<div v-for="(variant, variantIndex) in variants">
			<DBDivider></DBDivider>
			<DBLink
				class="link-headline"
				content="external"
				target="_blank"
				:href="getLink(variant.name)"
				@click="(event) => openVariantLink(event, variant.name)"
			>
				{{ variant.name }}
			</DBLink>
			<DBCard class="variants-card" :elevation-level="getElevation()">
				<div
					:role="variant.role"
					:aria-label="variant.role ? variant?.name : undefined"
					class="variants-list"
				>
					<div
						v-for="(example, exampleIndex) in variant.examples"
						:style="example.style"
						:class="example.className"
						:data-density="example.density"
					>
						<slot
							name="example"
							v-bind:exampleProps="example.props"
							v-bind:exampleName="example.name"
							v-bind:exampleIndex="exampleIndex"
							v-bind:variantIndex="variantIndex"
						></slot>
					</div>
				</div>
			</DBCard>
		</div>
	</div>
</template>
