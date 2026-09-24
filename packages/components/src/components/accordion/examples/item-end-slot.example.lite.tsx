import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBAccordionItem from '../../accordion-item/accordion-item.lite';
import DBBadge from '../../badge/badge.lite';

useMetadata({
	storybookTitle: 'Item end slot',
	// DBAccordionItem is a sub-component with no folder of its own, so its
	// examples live in the accordion folder but keep their own category and
	// reference component instead of the folder default DBAccordion.
	storybookCategory: 'DBAccordionItem',
	storybookComponentName: 'DBAccordionItem',
	storybookNames: ['End slot with a badge']
});

export default function AccordionItemEndSlot() {
	return (
		<Fragment>
			<DBAccordionItem
				headlinePlain="Current disruptions"
				endSlot={
					<DBBadge semantic="critical" emphasis="strong">
						3
					</DBBadge>
				}>
				Content
			</DBAccordionItem>
		</Fragment>
	);
}
