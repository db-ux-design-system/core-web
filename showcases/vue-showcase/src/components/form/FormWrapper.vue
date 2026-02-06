<script setup lang="ts">
const props = defineProps(["plain", "vmodel"]);
import { DBButton } from "../../../../../packages/v-core-components/src";
</script>

<template>
	<div class="form-container">
		<form>
			<fieldset><slot /></fieldset>
			<DBButton type="reset" data-testid="reset-button">Reset</DBButton>
		</form>
		<dl data-testid="data-list">
			<dt>Plain:</dt>
			<dd>{{ plain?.toString() }}</dd>
			<dt>VModel:</dt>
			<dd>{{ vmodel?.toString() }}</dd>
		</dl>
	</div>
</template>
