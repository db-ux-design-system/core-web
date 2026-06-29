import { DBAccordion } from '../index';

export default function Accordion() {
	function getItems() {
		return [
			{
				text: 'Item 1 Content',
				headlinePlain: 'Item 1',
				disabled: false
			},
			{
				text: 'Item 2 Content',
				headlinePlain: 'Item 2',
				disabled: true
			}
		];
	}

	return (
		<>
			<h1>DBAccordion Documentation Examples</h1>

			<h2>1. Default Accordion</h2>
			<DBAccordion>Default Accordion</DBAccordion>

			<h2>2. Behavior Variants</h2>
			<DBAccordion behavior="multiple">Multiple Behavior</DBAccordion>
			<DBAccordion behavior="single">Single Behavior</DBAccordion>

			<h2>3. Initial Open Index</h2>
			<DBAccordion initOpenIndex={[0, 1]}>Initial Open Index</DBAccordion>

			<h2>4. Items</h2>
			<DBAccordion items={getItems()}>Accordion with Items</DBAccordion>

			<h2>5. Name Attribute</h2>
			<DBAccordion name="accordion-name">With Name</DBAccordion>

			<h2>6. Variant Types</h2>
			<DBAccordion variant="divider">Divider Variant</DBAccordion>
			<DBAccordion variant="card">Card Variant</DBAccordion>
		</>
	);
}
