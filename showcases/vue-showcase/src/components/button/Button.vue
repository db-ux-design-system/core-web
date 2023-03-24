<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/button.json";
import { DBButton } from "../../../../../output/vue/vue3/src";
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
