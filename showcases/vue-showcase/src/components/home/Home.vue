<script setup lang="ts">
import {
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTabs
} from "../../../../../output/vue/src";
import Form from "../form/Form.vue";
import Textareas from "../form/Textareas.vue";
import Selects from "../form/Selects.vue";
import Checkboxes from "../form/Checkboxes.vue";
import Inputs from "../form/Inputs.vue";
</script>

<template>
	<DBTabs data-testid="tabs">
		<DBTabList>
			<DBTabItem>All</DBTabItem>
			<DBTabItem data-testid="tab-inputs">Input</DBTabItem>
			<DBTabItem data-testid="tab-textareas">Textarea</DBTabItem>
			<DBTabItem data-testid="tab-selects">Select</DBTabItem>
			<DBTabItem data-testid="tab-checkboxes">Checkbox</DBTabItem>
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
	</DBTabs>
</template>
