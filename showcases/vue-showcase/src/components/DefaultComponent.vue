<script setup lang="ts">
import { DBCodeDocs, DBDivider, DBLink } from "../../../../output/vue/vue3/src";
import type {
	DefaultComponentExample,
	DefaultComponentProps,
	DefaultComponentVariants
} from "../../../shared/default-component-data";
import {
	COLOR,
	COLOR_CONST,
	TONALITY,
	TONALITY_CONST
} from "../../../../packages/components/src/shared/constants";
import { useRoute } from "vue-router";
import { Ref, ref } from "vue";

interface DefaultExample extends DefaultComponentExample {
	name?: string;
	example?: any;
	style?: { display?: string; width?: string; height?: string };
	className?: string;
	props?: any;
	code?: {
		html?: string; // We will generate this with reacts 'renderToString'
		angular?: string;
		react?: string;
		vue?: string;
	};
}
interface DefaultVariants extends DefaultComponentVariants {
	name: string;
	examples: DefaultExample[];
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

if (route.query.page) {
	const foundVariant = props.variants.find(
		(variant) => variant.name.toLowerCase() === route.query.page
	);

	variantRef.value = foundVariant;
	if (foundVariant) {
		variantRefIndex.value = props.variants.indexOf(foundVariant);
	}
}

const getLink = (variantName: string) => {
	let currentUrl = window.location.href;
	if (!currentUrl.includes("?")) {
		currentUrl += "?";
	}
	if (!currentUrl.includes("color=")) {
		currentUrl += `&color=${route.query[COLOR_CONST] || COLOR.NEUTRAL}`;
	}
	if (!currentUrl.includes("tonality=")) {
		currentUrl += `&tonality=${
			route.query[TONALITY_CONST] || TONALITY.REGULAR
		}`;
	}
	return `${currentUrl}&page=${variantName.toLowerCase()}`;
};

const getCodeSnippets = (examples: DefaultExample[]) => {
	return examples
		.filter((example) => example.code)
		.map((example) => `/* ${example.name} */\n${example.code}`);
};
</script>

<template>
	<!-- TODO: Slots not working for nested components? -> Had to copy paste variant-cards...	-->
	<DBCodeDocs
		v-if="variantRef"
		class="variants-card"
		:codeSnippets="getCodeSnippets(variantRef.examples)"
	>
		<div class="variants-list">
			<div
				v-for="(example, exampleIndex) in variantRef.examples"
				:style="example.style"
				:class="example.className"
			>
				<slot
					name="example"
					v-bind:exampleProps="example.props"
					v-bind:exampleName="example.name"
					v-bind:exampleIndex="exampleIndex"
					v-bind:variantIndex="variantRefIndex"
				></slot>
			</div>
		</div>
	</DBCodeDocs>
	<div v-if="!variantRef" class="default-container">
		<h1>{{ title }}</h1>
		<div v-for="(variant, variantIndex) in variants">
			<DBDivider></DBDivider>
			<DBLink
				class="link-headline"
				content="external"
				target="_blank"
				:href="getLink(variant.name)"
			>
				{{ variant.name }}
			</DBLink>
			<DBCodeDocs
				class="variants-card"
				:codeSnippets="getCodeSnippets(variant.examples)"
			>
				<div class="variants-list">
					<div
						v-for="(example, exampleIndex) in variant.examples"
						:style="example.style"
						:class="example.className"
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
			</DBCodeDocs>
		</div>
	</div>
</template>
