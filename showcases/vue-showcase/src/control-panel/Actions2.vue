<script setup lang="ts">
import { DBButton, DBControlPanelActions2, DBSwitch } from "@components";
import { useLayout } from "../composables/use-layout";

const { shell, onChange } = useLayout();

const onShellToggle = () => {
	onChange({} as Event, "shell");
};
</script>

<template>
	<DBControlPanelActions2>
		<DBSwitch :checked="shell" @change="onShellToggle"> Shell </DBSwitch>
		<DBButton icon="x_placeholder" variant="ghost" noText>
			Notification
		</DBButton>
		<DBButton icon="x_placeholder" variant="ghost" noText> Help </DBButton>
	</DBControlPanelActions2>
</template>
