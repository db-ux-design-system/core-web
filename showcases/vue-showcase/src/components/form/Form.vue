<script setup lang="ts">
import {
	DBButton,
	DBCheckbox,
	DBInput,
	DBRadio,
	DBSelect,
	DBTag,
	DBTextarea
} from "../../../../../output/vue/src";

import { ref } from "vue";
const input = ref("");
const select = ref("");
const firstInput = ref("");
const textareavModel = ref("default value");
const textarea = ref("default value");
const textareaDefaultValue = ref("");
const dateInput = ref("");
const radio = ref<string>();
const checkbox = ref<boolean[]>([true, false]);
const tags = ref<string[]>([]);

const array = ["X", "Y", "Z"];

const isActive = ref(true);

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
			dateinput: dateInput.value,
			radio: radio.value,
			select: select.value,
			checkbox: checkbox.value,
			tags: tags.value
		})
	);
};

const reset = () => {
	firstInput.value = "resetted";
	textarea.value = "resetted";
	textareavModel.value = "resetted";
	checkbox.value = [true, false];
	dateInput.value = "";
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
						message="Description"
						icon="x_placeholder"
						name="input-name"
						:dataList="dataList"
						v-model:value="firstInput"
					/>
					<DBInput
						label="Dateinput"
						message="Description"
						name="date-name"
						v-model:value="dateInput"
						type="date"
					/>
					<p>Textarea:</p>
					<DBTextarea
						label="Textarea v-model"
						placeholder="Placeholder"
						message="Description"
						icon="x_placeholder"
						name="textarea-name"
						v-model:value="textareavModel"
					/>
					<DBTextarea
						label="Textarea value"
						placeholder="Placeholder"
						message="Description"
						icon="x_placeholder"
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
								:semantic="
									index === 0 ? undefined : 'successful'
								"
								:emphasis="index === 2 ? 'strong' : 'weak'"
								><DBCheckbox @Change="changeTags(tag)"
									>Tag {{ tag }}</DBCheckbox
								></DBTag
							>
						</li>
					</ul>
					<p>Checkbox:</p>
					<DBCheckbox
						@change="
							checkbox = [
								$event.target.checked,
								$event.target.checked
							]
						"
						:checked="checkbox[0] && checkbox[1]"
						:indeterminate="checkbox[0] !== checkbox[1]"
						name="checkbox"
						>Checkbox</DBCheckbox
					>
					<fieldset>
						<DBCheckbox
							name="checkbox-1"
							value="Checkbox checked"
							@change="
								checkbox = [$event.target.checked, checkbox[1]]
							"
							:checked="checkbox[0]"
						>
							Checkbox
						</DBCheckbox>
						<DBCheckbox
							name="checkbox-2"
							value="Checkbox checked"
							@change="
								checkbox = [checkbox[0], $event.target.checked]
							"
							:checked="checkbox[1]"
						>
							Checkbox
						</DBCheckbox>
					</fieldset>
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
					<DBButton type="button" variant="brand" @click="logAll()">
						Hi from Showcase!
					</DBButton>
				</fieldset>
			</form>
		</div>
		<DBButton
			:class="isActive ? 'blubber' : 'dada'"
			@click="isActive = !isActive"
			>Test</DBButton
		>
		<div>
			<h1>Output</h1>
			<dl>
				<dt>inputs value</dt>
				<dd>{{ firstInput ? firstInput : "No Input set" }}</dd>
				<dt>date inputs value</dt>
				<dd>{{ dateInput ? dateInput : "No Date Input set" }}</dd>
				<dt>textarea v-model</dt>
				<dd>{{ textareavModel || "No Input set" }}</dd>
				<dt>textarea value</dt>
				<dd>{{ textarea || "No Textarea set" }}</dd>
				<dt>textarea defaultValue</dt>
				<dd>{{ textareaDefaultValue || "No Input set" }}</dd>
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
