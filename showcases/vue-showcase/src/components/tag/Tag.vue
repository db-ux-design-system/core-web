<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/tag.json";
import {
	DBTag,
	DBButton,
	DBLink,
	DBCheckbox,
	DBRadio
} from "../../../../../output/vue/vue3/src";

const showAlert = (exampleName: string) => {
	// eslint-disable-next-line no-alert
	alert(exampleName);
};
</script>

<template>
	<DefaultComponent title="DBTag" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBTag
				:variant="exampleProps.variant"
				:disabled="exampleProps.disabled"
				:icon="exampleProps.icon"
				:noText="exampleProps.noText"
				:behaviour="exampleProps.behaviour"
				:emphasis="exampleProps.emphasis"
				:overflow="exampleProps.overflow"
				:removeButton="exampleProps.removeButton"
				@remove="showAlert(exampleName)"
			>
				<DBButton v-if="exampleProps.component === 'button'">{{
					exampleName
				}}</DBButton>
				<DBLink v-if="exampleProps.component === 'link'" href="#">{{
					exampleName
				}}</DBLink>
				<DBCheckbox
					v-if="exampleProps.component === 'checkbox'"
					:checked="exampleProps.checked"
					>{{ exampleName }}</DBCheckbox
				>
				<DBRadio
					v-if="exampleProps.component === 'radio'"
					name="radio"
					:checked="exampleProps.checked"
					>{{ exampleName }}</DBRadio
				>
				<template
					v-if="
						exampleProps.component !== 'button' &&
						exampleProps.component !== 'link' &&
						exampleProps.component !== 'checkbox' &&
						exampleProps.component !== 'radio'
					"
				>
					{{ exampleName }}
				</template>
			</DBTag>
		</template>
	</DefaultComponent>
</template>
