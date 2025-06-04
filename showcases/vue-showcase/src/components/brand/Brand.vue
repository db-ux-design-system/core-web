<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/brand.json";
import { DBControlPanelBrand } from "@components";
import imageUrl from "/assets/images/placeholder.jpg";
</script>

<template>
	<DefaultComponent title="DBBrand" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBControlPanelBrand :hideLogo="exampleProps?.hideLogo">
				<img
					v-if="exampleProps?.customLogo"
					:src="imageUrl"
					alt="this is a fancy placeholder logo"
				/>
				{{ exampleName }}
			</DBControlPanelBrand>
		</template>
	</DefaultComponent>
</template>
