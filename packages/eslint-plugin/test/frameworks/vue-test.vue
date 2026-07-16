<template>
	<div>
		<!-- db-ux/accordion-item-headline-required -->
		<DBAccordionItem></DBAccordionItem>

		<!-- db-ux/badge-corner-placement-rules -->
		<DBBadge placement="corner-top-right">9999</DBBadge>

		<!-- db-ux/badge-no-inline-in-interactive -->
		<DBButton>
			<DBBadge>Inline in button</DBBadge>
		</DBButton>

		<!-- db-ux/close-button-text-required -->
		<DBNotification closeable>Test</DBNotification>
		<DBNotification :closeable="true">Test</DBNotification>
		<DBNotification :closeable="false">Test</DBNotification>
		<DBNotification>Test</DBNotification>
		<DBDrawerHeader>Test</DBDrawerHeader>
		<DBCustomSelect label="Select"></DBCustomSelect>

		<!-- db-ux/drawer-header-required -->
		<DBDrawer>Content without header</DBDrawer>

		<!-- db-ux/sub-component-required-parent -->
		<DBDrawerHeader>Outside drawer</DBDrawerHeader>
		<DBDrawerFooter>Outside drawer</DBDrawerFooter>
		<DBNavigationItem>Outside navigation</DBNavigationItem>
		<DBTabList><DBTabItem>Outside tabs</DBTabItem></DBTabList>
		<DBTabPanel>Outside tabs</DBTabPanel>
		<DBTableHead
			><DBTableRow
				><DBTableHeaderCell>H</DBTableHeaderCell></DBTableRow
			></DBTableHead
		>
		<DBTableBody
			><DBTableRow
				><DBTableDataCell>D</DBTableDataCell></DBTableRow
			></DBTableBody
		>
		<DBTableFooter
			><DBTableRow
				><DBTableDataCell>F</DBTableDataCell></DBTableRow
			></DBTableFooter
		>
		<DBTableRow
			><DBTableDataCell>Outside section</DBTableDataCell></DBTableRow
		>
		<DBTableHeaderCell>Outside row</DBTableHeaderCell>
		<DBTableDataCell>Outside row</DBTableDataCell>
		<DBTableCaption>Outside table</DBTableCaption>

		<!-- db-ux/button-no-text-requires-tooltip -->
		<DBButton type="submit" noText icon="search"></DBButton>

		<!-- db-ux/button-type-required -->
		<DBButton>Missing type</DBButton>
		<DBButton type="button">Valid button</DBButton>

		<!-- db-ux/form-label-required -->
		<DBInput />

		<!-- db-ux/form-validation-message-required -->
		<DBInput label="Email" required />

		<!-- db-ux/header-burger-menu-label-required -->
		<DBHeader></DBHeader>

		<!-- db-ux/input-type-required -->
		<DBInput label="Test" />

		<!-- db-ux/link-external-security -->
		<DBLink href="https://example.com" target="_blank"
			>External link</DBLink
		>

		<!-- db-ux/navigation-item-back-button-text-required -->
		<DBNavigationItem>
			<template #subNavigation>Sub nav</template>
		</DBNavigationItem>

		<!-- db-ux/no-interactive-tooltip-content -->
		<DBTooltip>
			<DBButton type="submit">Click</DBButton>
		</DBTooltip>

		<!-- db-ux/no-nested-accordion -->
		<DBAccordion>
			<DBAccordionItem headlinePlain="Test">
				<DBAccordion></DBAccordion>
			</DBAccordionItem>
		</DBAccordion>

		<!-- db-ux/prefer-icon-attribute -->
		<DBButton type="submit">
			<DBIcon icon="search" />
		</DBButton>

		<!-- db-ux/select-requires-options -->
		<DBSelect label="Select"></DBSelect>

		<!-- db-ux/tag-removable-remove-button-required -->
		<DBTag behavior="removable"></DBTag>

		<!-- db-ux/tooltip-requires-interactive-parent -->
		<div>
			<DBTooltip>Tooltip without interactive parent</DBTooltip>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	DBAccordion,
	DBAccordionItem,
	DBBadge,
	DBButton,
	DBCustomSelect,
	DBDrawer,
	DBDrawerFooter,
	DBDrawerHeader,
	DBHeader,
	DBIcon,
	DBInput,
	DBLink,
	DBNavigationItem,
	DBNotification,
	DBSelect,
	DBTabItem,
	DBTabList,
	DBTabPanel,
	DBTableBody,
	DBTableCaption,
	DBTableDataCell,
	DBTableFooter,
	DBTableHead,
	DBTableHeaderCell,
	DBTableRow,
	DBTag,
	DBTooltip
} from "@db-ux/v-core-components";
</script>
