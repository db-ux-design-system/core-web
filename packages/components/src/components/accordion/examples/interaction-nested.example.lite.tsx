import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBAccordionItem from '../../accordion-item/accordion-item.lite';
import DBCustomSelect from '../../custom-select/custom-select.lite';
import DBAccordion from '../accordion.lite';
import { StorybookAccordionArgTypes } from './_accordion.arg.types';

useMetadata({
	storybookTitle: 'Interaction Nested',
	storybookNames: ['Nested'],
	storybookArgTypes: StorybookAccordionArgTypes
});

/**
 * Fixture for the cross-framework interaction e2e tests
 * (see showcases/e2e/accordion/accordion-interaction.spec.ts).
 *
 * Uses single behavior with a DBCustomSelect inside an item. The select
 * renders its own details element, which must not join the exclusive group of
 * the accordion items.
 */
export default function AccordionInteractionNested() {
	return (
		<Fragment>
			<DBAccordion behavior="single">
				<DBAccordionItem headlinePlain="Select">
					<DBCustomSelect
						data-testid="nested-select"
						label="Select an option"
						options={[{ value: 'Option A' }, { value: 'Option B' }]}
					/>
				</DBAccordionItem>
				<DBAccordionItem headlinePlain="Other">
					<span data-testid="other-content">Other content</span>
				</DBAccordionItem>
			</DBAccordion>
		</Fragment>
	);
}
