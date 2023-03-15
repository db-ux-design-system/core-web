<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/input";
import { DBInput } from "../../../../../output/vue/vue3/src";

const variants = ["informational", "warning", "critical", "successful"];

defaultComponentVariants.forEach((variant) => {
	variant.examples[0].code =
		'<DBInput label="Label" description="Description" />';
});

variants.forEach((variant, index) => {
	defaultComponentVariants[0].examples[
		index
	].code = `<DBInput label="Label" description="Description" variant="${variant}" />`;
});

defaultComponentVariants[1].examples[1].code =
	'<DBInput label="Label" description="Description" value="Input Text" />';
defaultComponentVariants[1].examples[2].code =
	'<DBInput label="Label" description="Description" value="123456" type="number" />';
defaultComponentVariants[1].examples[3].code =
	'<DBInput label="Label" description="Description" min-length="5" :required="true" />';
defaultComponentVariants[1].examples[4].code =
	'<DBInput label="Label" description="Description" :disabled="true" />';
defaultComponentVariants[1].examples[5].code =
	'<DBInput label="Label" description="Description" :disabled="true" value="Input Text" />';
defaultComponentVariants[1].examples[6].code =
	'<DBInput label="Label" description="Description" :required="true" value="Input Text" />';

defaultComponentVariants[2].examples[1].code =
	'<DBInput label="Label" description="Description" icon="account" />';
defaultComponentVariants[2].examples[2].code =
	'<DBInput label="Label" description="Description" icon="account" icon-after="edit"/>';
defaultComponentVariants[2].examples[3].code =
	'<DBInput label="Label" description="Description" icon-after="edit" />';
defaultComponentVariants[2].examples[4].code =
	'<DBInput label="Label" description="Description" icon-after="edit" variant="successful" />';
</script>

<template>
	<DefaultComponent title="Input" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex, exampleName }">
			<template v-if="exampleIndex === 0">
				<DBInput label="Label" :description="exampleName" />
			</template>
			<template v-if="variantIndex === 0">
				<template v-for="(variant, index) in variants">
					<DBInput
						v-if="exampleIndex === index + 1"
						label="Label"
						:description="exampleName"
						:variant="variant"
					/>
				</template>
			</template>
			<template v-if="variantIndex === 1">
				<template v-if="exampleIndex === 1">
					<DBInput
						label="Label"
						:description="exampleName"
						value="Input Text"
					/>
				</template>
				<template v-if="exampleIndex === 2">
					<DBInput
						label="Label"
						:description="exampleName"
						value="123456"
						type="number"
					/>
				</template>
				<template v-if="exampleIndex === 3">
					<DBInput
						label="Label"
						:description="exampleName"
						min-length="5"
						required="true"
					/>
				</template>
				<template v-if="exampleIndex === 4">
					<DBInput
						label="Label"
						:description="exampleName"
						disabled="true"
					/>
				</template>
				<template v-if="exampleIndex === 5">
					<DBInput
						label="Label"
						:description="exampleName"
						disabled="true"
						value="Input Text"
					/>
				</template>
				<template v-if="exampleIndex === 6">
					<DBInput
						label="Label"
						:description="exampleName"
						required="true"
						value="Input Text"
					/>
				</template>
			</template>
			<template v-if="variantIndex === 2">
				<template v-if="exampleIndex === 1">
					<DBInput
						label="Label"
						:description="exampleName"
						icon="account"
					/>
				</template>
				<template v-if="exampleIndex === 2">
					<DBInput
						label="Label"
						:description="exampleName"
						icon="account"
						icon-after="edit"
					/>
				</template>
				<template v-if="exampleIndex === 3">
					<DBInput
						label="Label"
						:description="exampleName"
						icon-after="edit"
					/>
				</template>
				<template v-if="exampleIndex === 4">
					<DBInput
						label="Label"
						:description="exampleName"
						icon-after="edit"
						variant="successful"
					/>
				</template>
			</template>
		</template>
	</DefaultComponent>
</template>
