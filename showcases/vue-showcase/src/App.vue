<script setup lang="ts">
import {
	DBButton,
	DBIcon,
	DBCard,
	DBInput
} from "../../../output/vue/vue3/src";

function onClick() {
 console.log("Button clicked");
}


</script>

<template>
	<main>
		<h1>Vue</h1>
		<DBCard>
			<div style="display: flex; gap: 4px; align-items: center">
				<DBButton variant="secondary">Test</DBButton>
				<DBButton text="Test" icon="account" @click="onClick"/>
				<DBIcon icon="account" />
			</div>
		</DBCard>
		<div style="display: flex; gap: 1rem; margin: 1rem 0">
			<section className="db-ui-regular">
				<DBInput
					description="Das ist die Beschreibung"
					label="Input Regular"
					placeholder="irgendein Text"
					iconBefore="edit"
					id="input-expr"
				/>
			</section>

			<section className="db-ui-expressive">
				<DBInput
					description="Das ist die Beschreibung"
					label="Startbahnhof eingeben"
					placeholder="irgendein Text"
					iconBefore="edit"
					variant="error"
					id="input-expr-error"
				/>

				<DBInput
					description="Das ist die Beschreibung"
					label="Startbahnhof eingeben"
					placeholder="irgendein Text"
					iconAfter="heart"
					variant="warning"
					id="input-expr-warning"
					required="true"
				/>
			</section>

			<section className="db-ui-regular">
				<DBInput
					label="Startbahnhof eingeben"
					placeholder="irgendein Text"
					iconAfter="heart"
					id="input-reg"
				/>
			</section>

			<section className="db-ui-functional">
				<DBInput
					label="Startbahnhof eingeben"
					placeholder="irgendein Text"
				/>
				<DBInput
					label="Textinput eingeben disabled"
					placeholder="irgendein Text"
					variant="information"
					id="input-func"
					disabled="true"
				/>
			</section>
		</div>
	</main>
</template>
