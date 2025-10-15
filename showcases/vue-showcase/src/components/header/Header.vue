<script setup lang="ts">
import {
	DBBrand,
	DBButton,
	DBHeader,
	DBLink,
	DBNavigation,
	DBNavigationItem
} from "../../../../../output/vue/src";
import defaultComponentVariants from "../../../../shared/header.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent title="DBHeader" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBHeader
				:width="exampleProps?.width"
				:force-mobile="exampleProps?.forceMobile"
			>
				<template v-slot:brand>
					<DBBrand>
						<template
							v-if="
								!exampleProps?.example || exampleProps?.withName
							"
						>
							DBHeader
						</template>
					</DBBrand>
				</template>
				<template
					v-if="
						!exampleProps?.example || exampleProps?.withNavigation
					"
				>
					<DBNavigation :aria-label="exampleName">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">{{ exampleName }}</a>
						</DBNavigationItem>
						<DBNavigationItem :disabled="true">
							<a href="#">{{ exampleName }} disabled</a>
						</DBNavigationItem>
					</DBNavigation>
				</template>
				<template v-slot:primary-action>
					<template v-if="!exampleProps?.example">
						<DBButton
							icon="magnifying_glass"
							variant="ghost"
							:no-text="true"
						>
							Search
						</DBButton></template
					>
				</template>
				<template v-slot:secondary-action>
					<template v-if="!exampleProps?.example">
						<DBButton
							icon="x_placeholder"
							variant="ghost"
							:no-text="true"
						>
							Profile
						</DBButton>
						<DBButton
							icon="x_placeholder"
							variant="ghost"
							:no-text="true"
						>
							Notification
						</DBButton>
						<DBButton
							icon="x_placeholder"
							variant="ghost"
							:no-text="true"
						>
							Help
						</DBButton></template
					>
				</template>
				<template v-slot:meta-navigation>
					<template v-if="!exampleProps?.example">
						<DBLink href="#">Imprint</DBLink>
						<DBLink href="#">Help</DBLink></template
					>
				</template>
			</DBHeader>
		</template>
	</DefaultComponent>
</template>
