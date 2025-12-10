<script setup lang="ts">
import { DBButton } from "@components";
import defaultComponentVariants from "../../../../shared/button.json";
import DefaultComponent from "../DefaultComponent.vue";

const log = (exampleName: string) => {
	// eslint-disable-next-line no-alert
	alert(exampleName);
};
</script>

<template>
	<DefaultComponent title="DBButton" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBButton
				:variant="exampleProps?.variant"
				:size="exampleProps?.size"
				:icon="exampleProps?.icon"
				:showIcon="exampleProps?.showIcon"
				:iconTrailing="exampleProps?.iconTrailing"
				:showIconTrailing="exampleProps?.showIconTrailing"
				:noText="exampleProps?.noText"
				:disabled="exampleProps?.disabled"
				:width="exampleProps?.width"
				@click="log(exampleName)"
			>
				{{ exampleName }}
			</DBButton>
		</template>
	</DefaultComponent>
</template>
