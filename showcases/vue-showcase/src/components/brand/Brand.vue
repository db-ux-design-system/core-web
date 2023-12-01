<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/brand.json";
import { DBBrand } from "../../../../../output/vue/vue3/src";

const log = (exampleName: string) => {
	// eslint-disable-next-line no-alert
	alert(exampleName);
};
</script>

<template>
	<DefaultComponent title="DBBrand" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBBrand :hideLogo="exampleProps.hideLogo">
				<img
					v-if="exampleProps.customLogo"
					src="/vue-showcase/assets/images/db_logo.svg"
				/>
				{{ exampleName }}
			</DBBrand>
		</template>
	</DefaultComponent>
</template>
