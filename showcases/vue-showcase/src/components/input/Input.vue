<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/input";
import { DBInput } from "../../../../../output/vue/vue3/src";

const variants = ["information", "warning", "critical", "success"];
</script>

<template>
	<DefaultComponent title="Input" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex }">
			<template v-if="exampleIndex === 0">
				<DBInput label="Label" description="Description" />
			</template>
			<template v-if="variantIndex === 0">
				<template v-for="(variant, index) in variants">
					<DBInput
						v-if="exampleIndex === index + 1"
						label="Label"
						description="Description"
						:variant="variant"
					/>
				</template>
			</template>
			<template v-if="variantIndex === 1">
				<template v-if="exampleIndex === 1">
					<DBInput
						label="Label"
						description="Description"
						value="Input Text"
					/>
				</template>
				<template v-if="exampleIndex === 2">
					<DBInput
						label="Label"
						description="Description"
						value="123456"
						type="number"
					/>
				</template>
				<template v-if="exampleIndex === 3">
					<DBInput
						label="Label"
						description="Description"
						min-length="5"
						required="true"
					/>
				</template>
				<template v-if="exampleIndex === 4">
					<DBInput
						label="Label"
						description="Description"
						disabled="true"
					/>
				</template>
				<template v-if="exampleIndex === 5">
					<DBInput
						label="Label"
						description="Description"
						disabled="true"
						value="Input Text"
					/>
				</template>
				<template v-if="exampleIndex === 6">
					<DBInput
						label="Label"
						description="Description"
						required="true"
						value="Input Text"
					/>
				</template>
			</template>
			<template v-if="variantIndex === 2">
				<template v-if="exampleIndex === 1">
					<DBInput
						label="Label"
						description="Description"
						icon-before="account"
					/>
				</template>
				<template v-if="exampleIndex === 2">
					<DBInput
						label="Label"
						description="Description"
						icon-before="account"
						icon-after="edit"
					/>
				</template>
				<template v-if="exampleIndex === 3">
					<DBInput
						label="Label"
						description="Description"
						icon-after="edit"
					/>
				</template>
				<template v-if="exampleIndex === 4">
					<DBInput
						label="Label"
						description="Description"
						icon-after="edit"
						variant="success"
					/>
				</template>
			</template>
		</template>
	</DefaultComponent>
</template>
