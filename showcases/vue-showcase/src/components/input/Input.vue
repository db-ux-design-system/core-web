<script setup lang="ts">
import { DBInput, DBButton } from "../../../../../output/vue/vue3/src";
import "./index.scss";

import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import {
	COLOR_CONST,
	INVALID_INPUT_BACKGROUNDS
} from "../../../../../packages/components/src/shared/constants";

const route = useRoute();
const backgroundWarning = ref(false);

watch(
	() => route.query,
	async (query: any) => {
		if (query[COLOR_CONST]) {
			backgroundWarning.value =
				Boolean(
					INVALID_INPUT_BACKGROUNDS.some((iBg) =>
						iBg.includes(query[COLOR_CONST] ?? "")
					)
				) || false;
		}
	}
);
</script>

<template>
	<div>
		<h1>Input</h1>

		<strong v-if="backgroundWarning">
			This background is not working with inputs! Please use light colors
			as background.
		</strong>
		<div class="input-container">
			<form>
				<DBInput
					description="This is a description"
					label="Start train station"
					placeholder="some text"
					iconBefore="edit"
					variant="error"
					value="hello"
					name="testInput"
				></DBInput>

				<DBInput
					description="Valid test"
					label="With event"
					placeholder="some text"
					iconBefore="edit"
					iconAfter="heart"
					variant="warning"
					id="input-expr-warning"
					required="true"
				></DBInput>
				<DBInput
					label="start date"
					placeholder="some text"
					type="datetime-local"
					id="input-expr-date"
				></DBInput>

				<DBInput
					label="Start train station"
					placeholder="some text"
					iconAfter="heart"
					id="input-reg"
					required="true"
					:minLength="5"
				></DBInput>
				<DBInput
					label="Start date"
					placeholder="some text"
					type="week"
					id="input-reg-date"
				></DBInput>

				<DBInput
					id="db-input-functional-1"
					label="Start train station"
					placeholder="some text"
				></DBInput>
				<DBInput
					id="db-input-functional-2"
					label="Textinput disabled"
					placeholder="some text"
					variant="information"
					disabled="true"
				></DBInput>

				<DBInput
					label="start date"
					placeholder="some text"
					type="datetime-local"
					id="input-func-date"
				></DBInput>
				<DBButton type="submit">Submit</DBButton>
			</form>
		</div>
	</div>
</template>
