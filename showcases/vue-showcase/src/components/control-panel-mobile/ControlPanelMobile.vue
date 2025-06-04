<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/control-panel-mobile.json";
import { DBControlPanelMobile } from "@components";
</script>

<template>
	<DefaultComponent title="DBControlPanelMobile" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex, exampleName, exampleProps }">
            <DBControlPanelMobile>{{exampleName}}</DBControlPanelMobile>
		</template>
	</DefaultComponent>
</template>

