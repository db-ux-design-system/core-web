<script setup lang="ts">
import DefaultComponent from "../DefaultComponent.vue";
import defaultComponentVariants from "../../../../shared/control-panel-desktop.json";
import {
	DBControlPanelDesktop,
	DBControlPanelBrand,
	DBLink,
	DBNavigation,
	DBNavigationItem,
	DBControlPanelMetaNavigation
} from "@components";
import PrimaryActions from "../../control-panel/PrimaryActions.vue";
import SecondaryActions from "../../control-panel/SecondaryActions.vue";
</script>

<template>
	<DefaultComponent title="DBHeader" :variants="defaultComponentVariants">
		<template
			#example="{ exampleIndex, variantIndex, exampleName, exampleProps }"
		>
			<DBControlPanelDesktop
				:width="exampleProps?.width"
				:force-mobile="exampleProps?.forceMobile"
			>
				<template v-slot:brand>
					<DBControlPanelBrand>
						<template
							v-if="
								!exampleProps?.example || exampleProps?.withName
							"
						>
							DBHeader
						</template>
					</DBControlPanelBrand>
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
				<template v-slot:primary-actions>
					<template v-if="!exampleProps?.example">
						<PrimaryActions />
					</template>
				</template>
				<template v-slot:secondary-actions>
					<template v-if="!exampleProps?.example">
						<SecondaryActions />
					</template>
				</template>
				<template v-slot:meta-navigation>
					<template v-if="!exampleProps?.example">
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
