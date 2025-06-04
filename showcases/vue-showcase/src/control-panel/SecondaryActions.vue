<script setup lang="ts">
import {
	DBButton,
	DBControlPanelSecondaryActions
} from "../../../../packages/components/src";
</script>

<template>
	<DBControlPanelSecondaryActions>
		<DBButton icon="x_placeholder" variant="ghost" noText>
			Profile
		</DBButton>
		<DBButton icon="x_placeholder" variant="ghost" noText>
			Notification
		</DBButton>
		<DBButton icon="x_placeholder" variant="ghost" noText> Help </DBButton>
	</DBControlPanelSecondaryActions>
</template>
