import {
	DBAccordion,
	DBAccordionItem,
	DBBadge,
	DBButton,
	DBCustomSelect,
	DBDrawer,
	DBHeader,
	DBIcon,
	DBInput,
	DBLink,
	DBNavigationItem,
	DBNotification,
	DBSelect,
	DBTag,
	DBTooltip
} from '@db-ux/react-core-components';

export const TestComponent = () => {
	return (
		<div>
			{/* db-ux/accordion-item-headline-required */}
			<DBAccordionItem></DBAccordionItem>

			{/* db-ux/badge-corner-placement-rules */}
			<DBBadge placement="corner-top-right">9999</DBBadge>

			{/* db-ux/badge-no-inline-in-interactive */}
			<DBButton>
				<DBBadge>Inline in button</DBBadge>
			</DBButton>

			{/* db-ux/close-button-text-required */}
			<DBNotification></DBNotification>
			<DBDrawer></DBDrawer>
			<DBCustomSelect label="Select"></DBCustomSelect>

			{/* db-ux/button-no-text-requires-tooltip */}
			<DBButton noText icon="search"></DBButton>

			{/* db-ux/button-type-required */}
			<DBButton>Missing type</DBButton>
			<DBButton type="button">Valid button</DBButton>

			{/* db-ux/form-label-required */}
			<DBInput />

			{/* db-ux/form-validation-message-required */}
			<DBInput label="Email" required />

			{/* db-ux/header-burger-menu-label-required */}
			<DBHeader></DBHeader>

			{/* db-ux/input-type-required */}
			<DBInput label="Test" />

			{/* db-ux/link-external-security */}
			<DBLink href="https://example.com" target="_blank">
				External link
			</DBLink>

			{/* db-ux/navigation-item-back-button-text-required */}
			<DBNavigationItem
				subNavigation={<div>Sub nav</div>}></DBNavigationItem>

			{/* db-ux/no-interactive-tooltip-content */}
			<DBTooltip>
				<DBButton>Click</DBButton>
			</DBTooltip>

			{/* db-ux/no-nested-accordion */}
			<DBAccordion>
				<DBAccordionItem>
					<DBAccordion></DBAccordion>
				</DBAccordionItem>
			</DBAccordion>

			{/* db-ux/prefer-icon-attribute */}
			<DBButton>
				<DBIcon icon="search" />
			</DBButton>

			{/* db-ux/select-requires-options */}
			<DBSelect label="Select"></DBSelect>

			{/* db-ux/tag-removable-remove-button-required */}
			<DBTag behavior="removable"></DBTag>

			{/* db-ux/tooltip-requires-interactive-parent */}
			<div>
				<DBTooltip>Tooltip without interactive parent</DBTooltip>
			</div>
		</div>
	);
};
