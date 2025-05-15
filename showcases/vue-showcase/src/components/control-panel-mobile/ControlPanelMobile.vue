<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/control-panel-mobile.json";
import { DBControlPanelMobile } from "../../../../../output/vue/src";
</script>

<template>
	<DefaultComponent title="DBControlPanelMobile" :variants="defaultComponentVariants">
		<template #example="{ exampleIndex, variantIndex, exampleName, exampleProps }">
            <DBControlPanelMobile>{{exampleName}}</DBControlPanelMobile>
		</template>
	</DefaultComponent>
</template>

