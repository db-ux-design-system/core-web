<script setup lang="ts">
import {
	DBButton,
	DBInput,
	DBRadio,
	DBCheckbox,
	DBSelect,
	DBTag,
	DBTextarea
} from "../../../../../output/vue/vue3/src";

import { ref } from "vue";
const input = ref("");
const select = ref("");
const firstInput = ref("");
const textareavModel = ref("default value");
const textarea = ref("default value");
const textareaDefaultValue = ref("");
const radio = ref<HTMLInputElement>();
const checkbox = ref<HTMLInputElement>();
const tags = ref<string[]>([]);

const array = ["X", "Y", "Z"];

const dataList = [{ key: "test", value: "Test" }, { key: "test2" }];

const changeTags = (tag: string) => {
	if (tags.value.includes(tag)) {
		tags.value = tags.value.filter((t) => t !== tag);
	} else {
		tags.value = [...tags.value, tag];
	}
};

// eslint-disable-next-line no-alert
const logAll = () => {
	alert(
		JSON.stringify({
			input: firstInput.value,
			textarea: textarea.value,
			textareaDefaultValue: textareaDefaultValue.value,
			textareavModel: textareavModel.value,
			radio: radio.value,
			select: select.value,
			checkbox: checkbox.checked,
			tags: tags.value
		})
	);
};

const reset = () => {
	firstInput.value = "resetted";
	textarea.value = "resetted";
	textareavModel.value = "resetted";
	checkbox.value = false;
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
						:dataList="dataList"
						v-model:value="firstInput"
					/>
					<p>Textarea:</p>
					<DBTextarea
						label="Textarea v-model"
						placeholder="Placeholder"
						description="Description"
						icon="account"
						name="textarea-name"
						v-model:value="textareavModel"
					/>
					<DBTextarea
						label="Textarea default-value"
						placeholder="Placeholder"
						description="Description"
						icon="account"
						name="textareaDefaultValue-name"
						:default-value="textareaDefaultValue"
						@change="textareaDefaultValue = $event.target.value"
					/>
					<DBTextarea
						label="Textarea value"
						placeholder="Placeholder"
						description="Description"
						icon="account"
						name="textarevalue-name"
						:value="textarea"
						@change="textarea = $event.target.value"
					/>
					<p>Radio:</p>
					<ul>
						<li v-for="radioName in array">
							<DBRadio
								@change="radio = radioName"
								name="radio-group"
								:value="radioName"
								>Radio {{ radioName }}</DBRadio
							>
						</li>
					</ul>
					<p>Tags:</p>
					<ul>
						<li v-for="(tag, index) in array">
							<DBTag
								:variant="
									index === 0 ? undefined : 'successful'
								"
								@Change="changeTags(tag)"
								:strong="index === 2"
								behaviour="interactive"
								>Tag {{ tag }}</DBTag
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
					<DBButton type="button" @click="reset()">
						Reset Form
					</DBButton>
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
				<dd>{{ firstInput ? firstInput : "No Input set" }}</dd>
				<dt>textarea v-model</dt>
				<dd>{{ textareavModel || "No Input set" }}</dd>
				<dt>textarea value</dt>
				<dd>{{ textarea || "No Textarea set" }}</dd>
				<dt>textarea defaultValue</dt>
				<dd>{{ textareaDefaultValue || "No Input set" }}</dd>
				<dt>radio value</dt>
				<dd>{{ radio ? radio : "No radio set" }}</dd>
				<dt>checkbox value</dt>
				<dd>{{ `checkbox ${checkbox ? "" : "un"}checked` }}</dd>
				<dt>select value</dt>
				<dd>{{ select ? select : "No select set" }}</dd>
				<dt>tags value</dt>
				<dd>{{ JSON.stringify(tags) }}</dd>
			</dl>
		</div>
	</div>
</template>
