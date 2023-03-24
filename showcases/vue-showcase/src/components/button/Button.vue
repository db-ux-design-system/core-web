<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/button";
import { DBButton } from "../../../../../output/vue/vue3/src";
import { DefaultComponentVariants } from "../../../../shared/default-component-data";

defaultComponentVariants.forEach((variant) => {
	variant.examples[0].code = "<DBButton>Button</DBButton>";
});

defaultComponentVariants[0].examples[1].code =
	'<DBButton variant="primary">Button</DBButton>';
defaultComponentVariants[0].examples[2].code =
	'<DBButton variant="transparent">Button</DBButton>';
defaultComponentVariants[0].examples[3].code =
	'<DBButton variant="semi-transparent">Button</DBButton>';

defaultComponentVariants[1].examples[1].code =
	'<DBButton state="loading">Button</DBButton>';

defaultComponentVariants[2].examples[1].code =
	'<DBButton size="small">Button</DBButton>';

defaultComponentVariants[3].examples[1].code =
	'<DBButton icon="account" :icntxt="true">Button</DBButton>';
defaultComponentVariants[3].examples[2].code =
	'<DBButton icon="account">Button</DBButton>';

defaultComponentVariants[4].examples[1].code =
	'<DBButton width="full">Button</DBButton>';
</script>

<template>
	<DefaultComponent title="Button" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex, exampleName }">
			<template v-if="exampleIndex === 0">
				<DBButton>{{ exampleName }}</DBButton>
			</template>
			<template v-if="exampleIndex === 1 && variantIndex === 0">
				<DBButton variant="primary">{{ exampleName }}</DBButton>
			</template>
			<template v-if="exampleIndex === 2 && variantIndex === 0">
				<DBButton variant="transparent">{{ exampleName }}</DBButton>
			</template>
			<template v-if="exampleIndex === 3 && variantIndex === 0">
				<DBButton variant="semi-transparent">{{
					exampleName
				}}</DBButton>
			</template>
			<template v-if="exampleIndex === 1 && variantIndex === 1">
				<DBButton state="loading">{{ exampleName }}</DBButton>
			</template>
			<template v-if="exampleIndex === 1 && variantIndex === 2">
				<DBButton size="small">{{ exampleName }}</DBButton>
			</template>
			<template v-if="exampleIndex === 1 && variantIndex === 3">
				<DBButton icon="account" :icntxt="true">{{
					exampleName
				}}</DBButton>
			</template>
			<template v-if="exampleIndex === 2 && variantIndex === 3">
				<DBButton icon="account">{{ exampleName }}</DBButton>
			</template>
			<template v-if="exampleIndex === 1 && variantIndex === 4">
				<DBButton width="full">{{ exampleName }}</DBButton>
			</template>
		</template>
	</DefaultComponent>
</template>
