import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBAccordionItem from '../accordion-item.lite';
import { StorybookAccordionItemArgTypes } from './_accordion-item.arg.types';

useMetadata({
	storybookTitle: 'Disabled',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookAccordionItemArgTypes
});

export default function AccordionItemDisabled() {
	return (
		<Fragment>
			<ul>
				<DBAccordionItem
					headlinePlain="(Default) False"
					disabled={false}>
					(Default) False
				</DBAccordionItem>
			</ul>
			<ul>
				<DBAccordionItem headlinePlain="True" disabled={true}>
					True
				</DBAccordionItem>
			</ul>
		</Fragment>
	);
}
