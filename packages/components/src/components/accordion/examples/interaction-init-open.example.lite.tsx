import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBAccordionItem from '../../accordion-item/accordion-item.lite';
import DBAccordion from '../accordion.lite';
import { StorybookAccordionArgTypes } from './_accordion.arg.types';

useMetadata({
	storybookTitle: 'Interaction Init Open',
	storybookNames: ['Init Open'],
	storybookArgTypes: StorybookAccordionArgTypes
});

/**
 * Fixture for the cross-framework interaction e2e tests
 * (see showcases/e2e/accordion/accordion-interaction.spec.ts).
 *
 * Opens items 2 and 3 on load to verify initOpenIndex renders their content
 * visible without any interaction.
 */
export default function AccordionInteractionInitOpen() {
	return (
		<Fragment>
			<DBAccordion initOpenIndex={[1, 2]}>
				<DBAccordionItem headlinePlain="Test">
					Content 1
				</DBAccordionItem>
				<DBAccordionItem headlinePlain="Test 2">
					<span data-testid="item2">Test2</span>
				</DBAccordionItem>
				<DBAccordionItem headlinePlain="Test 3">
					<span data-testid="item3">Test3</span>
				</DBAccordionItem>
			</DBAccordion>
		</Fragment>
	);
}
