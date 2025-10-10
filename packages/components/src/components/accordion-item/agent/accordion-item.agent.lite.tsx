import { DBAccordionItem } from '../index';

export default function AccordionItem() {
	return (
		<>
			<h1>DBAccordionItem Documentation Examples</h1>

			<h2>1. Default Accordion Item</h2>
			<DBAccordionItem>Default Accordion Item</DBAccordionItem>

			<h2>2. Initial State</h2>
			<DBAccordionItem defaultOpen={true}>Initially Open</DBAccordionItem>
			<DBAccordionItem defaultOpen={false}>
				Initially Closed
			</DBAccordionItem>

			<h2>3. Disabled State</h2>
			<DBAccordionItem disabled={true}>
				Disabled Accordion Item
			</DBAccordionItem>

			<h2>4. Headline Variants</h2>
			<DBAccordionItem headline={<strong>Custom Headline</strong>}>
				With Custom Headline
			</DBAccordionItem>
			<DBAccordionItem headlinePlain="Plain Headline">
				With Plain Headline
			</DBAccordionItem>

			<h2>5. Toggle Event</h2>
			<DBAccordionItem
				onToggle={(open: any) => console.log('Toggled:', open)}>
				With Toggle Event
			</DBAccordionItem>
		</>
	);
}
