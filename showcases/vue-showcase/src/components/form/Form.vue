<script setup lang="ts">
import { DBButton, DBInput } from "../../../../../output/vue/vue3/src";
import "./index.scss";

import { ref } from "vue";
const input = ref("");

// eslint-disable-next-line no-alert
const logAll = () => {
	alert(
		JSON.stringify({
			input: input.value
		})
	);
};
</script>

<template>
	<div class="form-container">
		<div>
			<form>
				<fieldset>
					<p>DbInput:</p>
					<DBInput
						label="Textinput"
						placeholder="Placeholder"
						description="Description"
						iconBefore="edit"
						name="input-name"
						class="fullWidth"
						:value="input"
						:on-change="
							($event) => {
								input = $event.target.value;
							}
						"
					/>
					<p>DbButton:</p>
					<DBButton type="button" variant="primary" @click="logAll()">
						Hi from Showcase!
					</DBButton>
				</fieldset>
			</form>
		</div>
		<div>
			<h2>Output</h2>
			<dl>
				<dt>inputs value</dt>
				<dd>{{ input ? input : "No Input set" }}</dd>
			</dl>
		</div>
	</div>
</template>
