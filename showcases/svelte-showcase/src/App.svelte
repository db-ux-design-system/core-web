<script>
	import DBButton from "../../../output/svelte/src/components/button/button.svelte";
	import DBIcon from "../../../output/svelte/src/components/icon/icon.svelte";
</script>

<main>
	<h1>Svelte</h1>
	<div style="display: flex; gap: 4px; align-items: center">
		<DBButton variant="secondary">Test</DBButton>
		<DBButton text="Test" icon="account" />
		<DBIcon icon="account" />
	</div>
</main>
