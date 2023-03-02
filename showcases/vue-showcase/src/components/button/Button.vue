<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/button";
import { DBButton } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="Button" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex }">
			<template v-if="exampleIndex === 0">
				<DBButton>Button</DBButton>
			</template>
			<template v-if="exampleIndex === 1 && variantIndex === 0">
				<DBButton variant="primary"> Button</DBButton>
			</template>
			<template v-if="exampleIndex === 2 && variantIndex === 0">
				<DBButton variant="transparent"> Button</DBButton>
			</template>
			<template v-if="exampleIndex === 3 && variantIndex === 0">
				<DBButton variant="semi-transparent"> Button</DBButton>
			</template>
			<template v-if="exampleIndex === 1 && variantIndex === 1">
				<DBButton state="loading"> Button</DBButton>
			</template>
			<template v-if="exampleIndex === 1 && variantIndex === 2">
				<DBButton size="small"> Button</DBButton>
			</template>
			<template v-if="exampleIndex === 1 && variantIndex === 3">
				<DBButton icon="account" :icntxt="true"> Button</DBButton>
			</template>
			<template v-if="exampleIndex === 2 && variantIndex === 3">
				<DBButton icon="account"> Button</DBButton>
			</template>
			<template v-if="exampleIndex === 1 && variantIndex === 4">
				<DBButton width="full"> Button</DBButton>
			</template>
		</template>
	</DefaultComponent>
</template>
