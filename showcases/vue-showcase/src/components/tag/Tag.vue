<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/tag.json";
import { DBTag } from "../../../../../output/vue/src";

const showAlert = (exampleName?: string) => {
	// eslint-disable-next-line no-alert
	alert(exampleName || "");
};
</script>

<template>
	<DefaultComponent title="DBTag" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBTag
				:semantic="exampleProps?.semantic"
				:icon="exampleProps?.icon"
				:noText="exampleProps?.noText"
				:behaviour="exampleProps?.behaviour"
				:emphasis="exampleProps?.emphasis"
				:overflow="exampleProps?.overflow"
				:removeButton="exampleProps?.removeButton"
				@remove="showAlert(exampleName)"
			>
				<button v-if="exampleProps?.component === 'button'">
					{{ exampleName }}
				</button>
				<a v-if="exampleProps?.component === 'link'" href="#">
					{{ exampleName }}
				</a>
				<label v-if="exampleProps?.component === 'checkbox'">
					<input
						type="checkbox"
						:disabled="exampleProps?.disabled"
						:checked="exampleProps?.checked"
					/>
					{{ exampleName }}
				</label>

				<label v-if="exampleProps?.component === 'radio'">
					<input
						type="radio"
						:checked="exampleProps?.checked"
						:name="exampleProps?.identifier"
					/>
					{{ exampleName }}
				</label>
				<template
					v-if="
						exampleProps?.component !== 'button' &&
						exampleProps?.component !== 'link' &&
						exampleProps?.component !== 'checkbox' &&
						exampleProps?.component !== 'radio' &&
						!exampleProps?.overflow
					"
				>
					{{ exampleName }}
				</template>
				<template
					v-if="
						exampleProps?.component !== 'button' &&
						exampleProps?.component !== 'link' &&
						exampleProps?.component !== 'checkbox' &&
						exampleProps?.component !== 'radio' &&
						exampleProps?.overflow
					"
				>
					<span>{{ exampleName }}</span>
				</template>
			</DBTag>
		</template>
	</DefaultComponent>
</template>
