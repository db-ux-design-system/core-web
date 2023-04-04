<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/input.json";
import { DBInput } from "../../../../../output/vue/vue3/src";

const variants = ["informational", "warning", "critical", "successful"];
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
