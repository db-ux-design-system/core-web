<script setup lang="ts">
import { DBDivider } from "../../../../output/vue/vue3/src";
import type {
	DefaultComponentExample,
	DefaultComponentProps,
	DefaultComponentVariants
} from "../../../shared/default-component-data";

interface DefaultExample extends DefaultComponentExample {
	name?: string;
	example?: any;
	style?: any;
	className?: string;
}
interface DefaultVariants extends DefaultComponentVariants {
	name: string;
	examples: DefaultExample[];
}
/* Workaround see: https://vuejs.org/guide/typescript/composition-api.html#typing-component-props */
interface DefaultProps extends DefaultComponentProps {
	title: string;
	description?: any;
	variants: DefaultVariants[];
}

const props = defineProps<DefaultProps>();

const getSlotName = (
	title: string,
	variantIndex: number,
	exampleIndex: number
) => {
	return `${title.toLowerCase()}-${variantIndex}-${exampleIndex}`;
};
</script>

<template>
	<div class="default-container">
		<h1>{{ title }}</h1>
		<div v-for="(variant, variantIndex) in variants">
			<DBDivider></DBDivider>
			<strong>{{ variant.name }}</strong>
			<ul class="variants-list">
				<li
					v-for="(example, exampleIndex) in variant.examples"
					:style="example.style"
					:class="example.className"
				>
					<p>
						<small>{{ example.name }}</small>
					</p>
					<slot
						name="example"
						v-bind:exampleIndex="exampleIndex"
						v-bind:variantIndex="variantIndex"
					></slot>
				</li>
			</ul>
		</div>
	</div>
</template>
