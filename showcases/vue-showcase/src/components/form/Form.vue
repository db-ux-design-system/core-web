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
	<div>
		<div class="form-container">
			<fieldset>
				<form>
					<p>DbInput:</p>
					<DBInput
						label="Infield"
						name="input-name"
						class="fullWidth"
						:value="input"
						:on-change="
							($event) => {
								input = $event.target.value;
							}
						"
					/>
				</form>
			</fieldset>
			<fieldset>
				<p>DbButton:</p>
				<DBButton variant="primary" @click="logAll()">
					Hi from Showcase!
				</DBButton>
				<h2>Output</h2>
				<dl>
					<dt>inputs value</dt>
					<dd>{{ input ? input : "No Input set" }}</dd>
				</dl>
			</fieldset>
		</div>
	</div>
</template>
