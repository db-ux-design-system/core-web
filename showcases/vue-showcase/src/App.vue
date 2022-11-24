<script setup>
import {
	DBButton,
	DBIcon,
	DBTabBar,
	DBTab
} from "../../../packages/core/output/vue/vue3/src";
</script>

<template>
	<main>
		<h1>Vue</h1>
		<div style="display: flex; gap: 4px; align-items: center">
			<DBButton variant="secondary">Test</DBButton>
			<DBButton text="Test" icon="account" />
			<DBIcon icon="account" />
		</div>

		<div style="display: flex; gap: 4px; flex-direction: column">
			<h2>TabBar</h2>
			<DBTabBar>
				<DBTab name="tab-bar-1" label="Tab1">
					<strong>Content 1-1</strong>
				</DBTab>
				<DBTab name="tab-bar-1" label="Tab2" active="{true}">
					Content 1-2
				</DBTab>
			</DBTabBar>

			<DBTabBar
				:tabs="[
					{
						name: 'tab-bar-2',
						label: '2-Tab1',
						active: true,
						children: 'Content 2-1'
					},
					{
						name: 'tab-bar-2',
						label: '2-Tab2',
						content: 'Content 2-2'
					}
				]"
			/>
		</div>
	</main>
</template>
