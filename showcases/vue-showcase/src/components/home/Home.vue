<script setup lang="ts">
import {
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTabs
} from "../../../../../output/vue/src";
import Checkboxes from "../form/Checkboxes.vue";
import CustomSelects from "../form/Custom-Selects.vue";
import Form from "../form/Form.vue";
import Inputs from "../form/Inputs.vue";
import Radios from "../form/Radios.vue";
import Selects from "../form/Selects.vue";
import Textareas from "../form/Textareas.vue";
</script>

<template>
	<DBTabs data-testid="tabs">
		<DBTabList>
			<DBTabItem>All</DBTabItem>
			<DBTabItem data-testid="tab-inputs">Input</DBTabItem>
			<DBTabItem data-testid="tab-textareas">Textarea</DBTabItem>
			<DBTabItem data-testid="tab-selects">Select</DBTabItem>
			<DBTabItem data-testid="tab-checkboxes">Checkbox</DBTabItem>
			<DBTabItem data-testid="tab-radios">Radios</DBTabItem>
			<DBTabItem data-testid="tab-custom-selects"
				>Custom Selects</DBTabItem
			>
		</DBTabList>
		<DBTabPanel>
			<Form />
		</DBTabPanel>
		<DBTabPanel>
			<Inputs />
		</DBTabPanel>
		<DBTabPanel>
			<Textareas />
		</DBTabPanel>
		<DBTabPanel>
			<Selects />
		</DBTabPanel>
		<DBTabPanel>
			<Checkboxes />
		</DBTabPanel>
		<DBTabPanel>
			<Radios />
		</DBTabPanel>
		<DBTabPanel>
			<CustomSelects />
		</DBTabPanel>
	</DBTabs>
</template>
