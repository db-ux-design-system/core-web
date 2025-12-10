<script setup lang="ts">
import { DBInfotext, DBSwitch } from "@components";
import defaultComponentVariants from "../../../../shared/switch.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent title="DBSwitch" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBSwitch
				:visualAid="exampleProps?.visualAid"
				:checked="exampleProps?.checked"
				:disabled="exampleProps?.disabled"
				:required="exampleProps?.required"
				:showLabel="exampleProps?.showLabel"
				:variant="exampleProps?.variant"
				:size="exampleProps?.size"
				:icon="exampleProps?.icon"
				:iconTrailing="exampleProps?.iconTrailing"
				:iconLeading="exampleProps?.iconLeading"
				:validation="exampleProps?.validation"
				:invalidMessage="exampleProps?.invalidMessage"
				:validMessage="exampleProps?.validMessage"
				:message="exampleProps?.message"
				:showMessage="exampleProps?.showMessage"
			>
				{{ exampleName }}
			</DBSwitch>
			<DBInfotext
				v-if="
					exampleProps?.showLabel !== undefined &&
					!exampleProps?.showLabel
				"
				semantic="informational"
				icon="none"
			>
				{{ exampleName }}
			</DBInfotext>
		</template>
	</DefaultComponent>
</template>
