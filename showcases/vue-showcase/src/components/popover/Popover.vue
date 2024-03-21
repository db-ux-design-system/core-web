<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/popover.json";
import { DBButton, DBPopover } from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBPopover" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBPopover
				:width="exampleProps.width"
				:gap="exampleProps.gap"
				:spacing="exampleProps.spacing"
				:placement="exampleProps.placement"
				:animation="exampleProps.animation"
				:delay="exampleProps.delay"
				:id="exampleProps.id"
			>
				<template v-slot:trigger>
					<DBButton :describedbyid="exampleProps.id">
						{{ exampleName }}
					</DBButton>
				</template>
				<template v-if="exampleProps.content">{{
					exampleProps.content
				}}</template>
				<ul v-if="!exampleProps.content" class="popover-list">
					<li>Popover Custom Item 1</li>
					<li>Popover Custom Item 2</li>
					<li>
						<DBButton>Popover Custom Item 3</DBButton>
					</li>
				</ul>
			</DBPopover>
		</template>
	</DefaultComponent>
</template>
