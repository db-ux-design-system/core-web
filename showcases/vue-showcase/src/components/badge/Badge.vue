<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/badge.json";
import {
	DBBadge,
	DBIcon,
	DBButton,
	DBInfotext
} from "../../../../../output/vue/vue3/src";
</script>

<template>
	<DefaultComponent title="DBBadge" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<template v-if="!exampleProps.placement && !exampleProps.example">
				<DBBadge
					:variant="exampleProps.variant"
					:emphasis="exampleProps.emphasis"
					:size="exampleProps.size"
				>
					{{ exampleProps.noContent ? "" : exampleName }}
				</DBBadge>
				<DBInfotext
					v-if="exampleProps.noContent"
					variant="informational"
					size="small"
					icon="none"
				>
					{{ exampleName }}
				</DBInfotext>
			</template>

			<template
				v-if="
					exampleProps.placement &&
					exampleProps.placement !== 'inline' &&
					!exampleProps.example
				"
			>
				<DBButton icon="account" variant="outlined" :noText="true">
					<DBBadge
						emphasis="strong"
						variant="critical"
						size="small"
						:placement="exampleProps.placement"
					>
					</DBBadge>
					{{ exampleName }}
				</DBButton>
				<DBInfotext variant="informational" size="small" icon="none">
					{{ exampleName }}
				</DBInfotext>
			</template>

			<template v-if="exampleProps.placement === 'inline'">
				<div class="badge-inline-container">
					<DBIcon icon="account"></DBIcon>
					<span>{{ exampleName }}</span>
					<DBBadge size="small" emphasis="strong" variant="critical">
						Label
					</DBBadge>
					<DBIcon icon="error"></DBIcon>
				</div>
			</template>

			<template v-if="exampleProps.example === 'icon'">
				<DBBadge
					variant="critical"
					emphasis="strong"
					:size="exampleProps.size"
				>
					<DBIcon icon="account">{{ exampleName }}</DBIcon>
				</DBBadge>
				<DBInfotext variant="informational" size="small" icon="none">
					{{ exampleName }}
				</DBInfotext>
			</template>

			<template v-if="exampleProps.example === 'number'">
				<DBBadge variant="successful">9</DBBadge>
				<DBBadge variant="informational">12</DBBadge>
				<DBBadge variant="warning">123</DBBadge>
				<DBBadge size="small" emphasis="strong" variant="successful">
					9
				</DBBadge>
				<DBBadge size="small" emphasis="strong" variant="informational">
					12
				</DBBadge>
				<DBBadge size="small" emphasis="strong" variant="warning">
					123
				</DBBadge>
				<DBInfotext variant="informational" size="small" icon="none">
					{{ exampleName }}
				</DBInfotext>
			</template>
		</template>
	</DefaultComponent>
</template>
