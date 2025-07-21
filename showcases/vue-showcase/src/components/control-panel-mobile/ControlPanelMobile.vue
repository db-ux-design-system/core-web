<script setup lang="ts">
import { DBControlPanelMobile } from "@components";
import defaultComponentVariants from "../../../../shared/control-panel-mobile.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent
		title="DBControlPanelMobile"
		:variants="defaultComponentVariants"
	>
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBControlPanelMobile>{{ exampleName }}</DBControlPanelMobile>
		</template>
	</DefaultComponent>
</template>
