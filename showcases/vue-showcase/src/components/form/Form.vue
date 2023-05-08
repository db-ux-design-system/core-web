<script setup lang="ts">
import {
	DBButton,
	DBInput,
	DBRadio,
	DBCheckbox,
	DBSelect
} from "../../../../../output/vue/vue3/src";

import { ref } from "vue";
const input = ref("");
const radio = ref("");
const checkbox = ref("");
const select = ref("");

const radioNames = ["X", "Y", "Z"];

const dataList = [{ key: "test", value: "Test" }, { key: "test2" }];

// eslint-disable-next-line no-alert
const logAll = () => {
	alert(
		JSON.stringify({
			input: input.value,
			radio: radio.value,
			select: select.value,
			checkbox: checkbox.checked
		})
	);
};
</script>

<template>
	<div class="form-container">
		<div>
			<form>
				<fieldset>
					<p>Input:</p>
					<DBInput
						label="Textinput"
						placeholder="Placeholder"
						description="Description"
						icon="account"
						name="input-name"
						class="fullWidth"
						:dataList="dataList"
						v-model:value="input"
					/>
					<p>Radio:</p>
					<ul>
						<li v-for="radioName in radioNames">
							<DBRadio
								@change="radio = radioName"
								name="radio-group"
								>Radio {{ radioName }}</DBRadio
							>
						</li>
					</ul>
					<p>Checkbox:</p>
					<DBCheckbox
						@change="checkbox = $event.target.checked"
						name="checkbox"
						>Checkbox</DBCheckbox
					>
					<p>DBSelect:</p>
					<DBSelect
						:value="select"
						label="Label"
						@change="(event) => (select = event.target.value)"
					>
						<option value="test1">Test1</option>
						<option value="test2">Test2</option>
					</DBSelect>
					<p>Button:</p>
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
				<dt>radio value</dt>
				<dd>{{ radio ? radio : "No radio set" }}</dd>
				<dt>checkbox value</dt>
				<dd>{{ `checkbox ${checkbox ? "" : "un"}checked` }}</dd>
				<dt>select value</dt>
				<dd>{{ select ? select : "No select set" }}</dd>
			</dl>
		</div>
	</div>
</template>
