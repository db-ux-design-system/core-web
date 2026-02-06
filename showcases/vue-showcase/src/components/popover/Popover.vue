<script setup lang="ts">
import {
	DBButton,
	DBPopover
} from "../../../../../packages/v-core-components/src";
import defaultComponentVariants from "../../../../shared/popover.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent title="DBPopover" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBPopover
				:width="exampleProps?.width"
				:gap="exampleProps?.gap"
				:spacing="exampleProps?.spacing"
				:placement="exampleProps?.placement"
				:animation="exampleProps?.animation"
				:delay="exampleProps?.delay"
				:id="exampleProps?.id"
			>
				<template v-slot:trigger>
					<DBButton>
						{{ exampleName }}
					</DBButton>
				</template>
				<template v-if="exampleProps?.content">{{
					exampleProps?.content
				}}</template>
				<template v-if="!exampleProps?.content">
					<ul class="popover-list">
						<li>Popover Custom Item 1</li>
						<li>Popover Custom Item 2</li>
					</ul>
					<DBButton>Popover Custom Item 3</DBButton>
				</template>
			</DBPopover>
		</template>
	</DefaultComponent>
</template>
