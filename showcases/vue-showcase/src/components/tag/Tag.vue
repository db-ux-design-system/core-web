<script setup lang="ts">
import { DBTag } from "@db-ux/v-core-components/src";
import defaultComponentVariants from "../../../../shared/tag.json";
import DefaultComponent from "../DefaultComponent.vue";

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
			<i class="line-break" v-if="exampleProps?.lineBreak" />
			<DBTag
				v-if="!exampleProps?.lineBreak"
				:semantic="exampleProps?.semantic"
				:icon="exampleProps?.icon"
				:noText="exampleProps?.noText"
				:behavior="exampleProps?.behavior"
				:emphasis="exampleProps?.emphasis"
				:showIcon="exampleProps?.showIcon"
				:showCheckState="exampleProps?.showCheckState"
				:overflow="exampleProps?.overflow"
				:removeButton="exampleProps?.removeButton"
				@remove="showAlert(exampleName)"
			>
				<div
					v-if="exampleProps?.content"
					slot="content"
					class="default-content-slot"
				>
					Swap Slot
				</div>

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
