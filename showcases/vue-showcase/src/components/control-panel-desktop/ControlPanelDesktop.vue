<script setup lang="ts">
import {
	DBButton,
	DBControlPanelBrand,
	DBControlPanelDesktop,
	DBControlPanelMetaNavigation,
	DBControlPanelPrimaryActions,
	DBControlPanelSecondaryActions,
	DBLink,
	DBNavigation,
	DBNavigationItem
} from "@components";
import defaultComponentVariants from "../../../../shared/control-panel-desktop.json";
import DefaultComponent from "../DefaultComponent.vue";
</script>

<template>
	<DefaultComponent title="DBHeader" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBControlPanelDesktop
				:width="exampleProps?.width"
				:orientation="exampleProps?.orientation ?? 'horizontal'"
			>
				<template v-slot:brand>
					<DBControlPanelBrand>
						<template v-if="exampleProps?.withName ?? true">
							DBHeader
						</template>
					</DBControlPanelBrand>
				</template>
				<template v-if="exampleProps?.withNavigation ?? true">
					<DBNavigation :aria-label="exampleName">
						<DBNavigationItem icon="x_placeholder">
							<a href="#">{{ exampleName }}</a>
						</DBNavigationItem>
						<DBNavigationItem icon="x_placeholder" :disabled="true">
							<a href="#">{{ exampleName }} disabled</a>
						</DBNavigationItem>
					</DBNavigation>
				</template>
				<template v-slot:primary-actions>
					<template v-if="exampleProps?.withPrimary ?? true">
						<DBControlPanelPrimaryActions>
							<DBButton
								icon="magnifying_glass"
								variant="ghost"
								noText
							>
								Search
							</DBButton>
						</DBControlPanelPrimaryActions>
					</template>
				</template>
				<template v-slot:secondary-actions>
					<template v-if="exampleProps?.withSecondary ?? true">
						<DBControlPanelSecondaryActions>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText
							>
								Profile
							</DBButton>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText
							>
								Notification
							</DBButton>
							<DBButton
								icon="x_placeholder"
								variant="ghost"
								noText
							>
								Help
							</DBButton>
						</DBControlPanelSecondaryActions>
					</template>
				</template>
				<template v-slot:meta-navigation>
					<template v-if="exampleProps?.withMeta ?? true">
						<DBControlPanelMetaNavigation>
							<DBLink href="#">Imprint</DBLink>
							<DBLink href="#">Help</DBLink>
						</DBControlPanelMetaNavigation>
					</template>
				</template>
			</DBControlPanelDesktop>
		</template>
	</DefaultComponent>
</template>
