import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBAccordionItem from '../../accordion-item/accordion-item.lite';

useMetadata({
	storybookTitle: 'Item open',
	// DBAccordionItem is a sub-component with no folder of its own, so its
	// examples live in the accordion folder but keep their own category and
	// reference component instead of the folder default DBAccordion.
	storybookCategory: 'DBAccordionItem',
	storybookComponentName: 'DBAccordionItem',
	storybookNames: ['(Default) False', 'True']
});

export default function AccordionItemOpen() {
	return (
		<Fragment>
			<div>
				<DBAccordionItem
					headlinePlain="(Default) False"
					defaultOpen={false}>
					(Default) False
				</DBAccordionItem>
			</div>

			<div>
				<DBAccordionItem headlinePlain="True" defaultOpen={true}>
					True
				</DBAccordionItem>
			</div>
		</Fragment>
	);
}
