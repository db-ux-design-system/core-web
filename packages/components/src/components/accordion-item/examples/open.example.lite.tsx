import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBAccordionItem from '../accordion-item.lite';
import { StorybookAccordionItemArgTypes } from './_accordion-item.arg.types';

useMetadata({
	storybookTitle: 'Open',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookAccordionItemArgTypes
});

export default function AccordionItemOpen() {
	return (
		<Fragment>
			<DBAccordionItem
				headlinePlain="(Default) False"
				defaultOpen={false}>
				(Default) False
			</DBAccordionItem>
			<DBAccordionItem headlinePlain="True" defaultOpen={true}>
				True
			</DBAccordionItem>
		</Fragment>
	);
}
