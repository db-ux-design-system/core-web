<script setup lang="ts">
import { DBButton, DBInput, DBRadio } from "../../../../../output/vue/vue3/src";

import { ref } from "vue";
const input = ref("");
const radio = ref("");

const radioNames = ["X", "Y", "Z"];

// eslint-disable-next-line no-alert
const logAll = () => {
	alert(
		JSON.stringify({
			input: input.value,
			radio: radio.value
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
						icon="edit"
						name="input-name"
						class="fullWidth"
						v-model:value="input"
					/>
					<p>DbRadio:</p>
					<ul>
						<li v-for="radioName in radioNames">
							<DBRadio
								@change="radio = radioName"
								name="radio-group"
							>
								Radio {{ radioName }}
							</DBRadio>
						</li>
					</ul>
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
			<dl>
				<dt>radio value</dt>
				<dd>{{ radio ? radio : "No radio set" }}</dd>
			</dl>
		</div>
	</div>
</template>
