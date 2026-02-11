<script setup lang="ts">
import { DBFooter } from "../../../../../output/vue/src";
import defaultComponentVariants from "../../../../shared/footer.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<div class="footer-page">
		<DefaultComponent title="DBFooter" :variants="defaultComponentVariants">
			<template #example="{ exampleProps, exampleName, exampleContent }">
				<DBFooter
					:showCopyright="exampleProps?.showCopyright ?? true"
					:showMain="exampleProps?.showMain ?? true"
					:showMeta="exampleProps?.showMeta ?? true"
					:width="exampleProps?.width"
				>
					<template #main>
						<span>{{ exampleContent ?? exampleName }}</span>
					</template>
				</DBFooter>
			</template>
		</DefaultComponent>
	</div>
</template>
