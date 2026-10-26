import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBAccordionItem from '../../accordion-item/accordion-item.lite';
import DBButton from '../../button/button.lite';
import DBTextarea from '../../textarea/textarea.lite';
import DBAccordion from '../accordion.lite';
import { StorybookAccordionArgTypes } from './_accordion.arg.types';

useMetadata({
	storybookTitle: 'Interaction Action',
	storybookNames: ['Action'],
	storybookArgTypes: StorybookAccordionArgTypes
});

/**
 * Fixture for the cross-framework interaction e2e tests
 * (see showcases/e2e/accordion/accordion-interaction.spec.ts).
 *
 * Uses single behavior with nested interactive content and a disabled item to
 * verify the single-open behavior, nested interactions and the disabled state.
 */
export default function AccordionInteractionAction() {
	return (
		<Fragment>
			<DBAccordion behavior="single">
				<DBAccordionItem data-testid="item1" headlinePlain="Test">
					<DBButton data-testid="button">Click me</DBButton>
				</DBAccordionItem>
				<DBAccordionItem data-testid="item2" headlinePlain="Test 2">
					<DBTextarea data-testid="textarea" label="Label" />
				</DBAccordionItem>
				<DBAccordionItem
					disabled={true}
					data-testid="item3"
					headlinePlain="Test 3">
					<DBButton data-testid="button2">Click me</DBButton>
				</DBAccordionItem>
			</DBAccordion>
		</Fragment>
	);
}
