<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/link.json";
import { DBLink } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="Link" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex, exampleName }">
			<template v-if="exampleIndex === 0">
				<DBLink href="#">{{ exampleName }}</DBLink>
			</template>
			<template v-if="exampleIndex === 1 && variantIndex === 0">
				<DBLink href="#" variant="primary">{{ exampleName }}</DBLink>
			</template>

			<template v-if="exampleIndex === 1 && variantIndex === 1">
				<DBLink href="#" disabled="true">{{ exampleName }}</DBLink>
			</template>

			<template v-if="exampleIndex === 1 && variantIndex === 2">
				<DBLink href="#" size="small">{{ exampleName }}</DBLink>
			</template>

			<template v-if="exampleIndex === 1 && variantIndex === 3">
				<DBLink href="#" content="external">{{ exampleName }}</DBLink>
			</template>
		</template>
	</DefaultComponent>
</template>
