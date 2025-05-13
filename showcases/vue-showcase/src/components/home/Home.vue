<script setup lang="ts">
import {
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTabs,
	DBCustomSelect
} from "../../../../../output/vue/src";
import Form from "../form/Form.vue";
import Textareas from "../form/Textareas.vue";
import Selects from "../form/Selects.vue";
import Checkboxes from "../form/Checkboxes.vue";
import Inputs from "../form/Inputs.vue";
import Radios from "../form/Radios.vue";

const options = [
	{ value: "Option 21", id: "miouzc0ec" },
	{ value: "Option 22", id: "10dqnhil5" },
	{ value: "Option 23", id: "dwe" },
	{ value: "Option 24", id: "sdas" },
	{ value: "Option 25", id: "cxcy" },
	{ value: "Option 26", id: "dssdfv" },
	{ value: "Option 27", id: "sdvee" },
	{ value: "Option 28", id: "dsvdsv" },
	{ value: "Option 29", id: "evrzbt" },
	{ value: "Option 30", id: "csdcdw" }
];
</script>

<template>
	<DBCustomSelect
		:options="options"
		label="Label"
		placeholder="Placeholder"
		id="id-10206"
	>
	</DBCustomSelect>
</template>
