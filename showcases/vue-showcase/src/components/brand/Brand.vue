<script setup lang="ts">
import { DBBrand } from "../../../../../output/vue/src";
import defaultComponentVariants from "../../../../shared/brand.json";
import DefaultComponent from "../DefaultComponent.vue";
import imageUrl from "/assets/images/placeholder.jpg";
</script>

<template>
	<DefaultComponent title="DBBrand" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBBrand :hideLogo="exampleProps?.hideLogo">
				<img
					v-if="exampleProps?.customLogo"
					:src="imageUrl"
					alt="this is a fancy placeholder logo"
				/>
				{{ exampleName }}
			</DBBrand>
		</template>
	</DefaultComponent>
</template>
