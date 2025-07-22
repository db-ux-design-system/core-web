import { DBButton } from '../index';

export default function ButtonDocs() {
	return (
		<>
			<h1>DBButton Documentation Examples</h1>

			<h2>1. Default Button</h2>
			<DBButton>Button</DBButton>

			<h2>2. Variants</h2>
			<DBButton variant="filled">Filled</DBButton>
			<DBButton variant="outlined">Outlined</DBButton>
			<DBButton variant="ghost">Ghost</DBButton>
			<DBButton variant="brand">Brand</DBButton>

			<h2>3. Sizes</h2>
			<DBButton size="small">Small</DBButton>
			<DBButton size="medium">Medium</DBButton>

			<h2>4. Icon Only</h2>
			<DBButton icon="check" noText />

			<h2>5. Disabled</h2>
			<DBButton disabled>Disabled</DBButton>

			<h2>6. Button Types</h2>
			<DBButton type="button">Type=button</DBButton>
			<DBButton type="submit">Type=submit</DBButton>
			<DBButton type="reset">Type=reset</DBButton>

			<h2>7. Form Association</h2>
			<form id="example-form">
				<input name="exampleInput" placeholder="Example input" />
			</form>
			<DBButton form="example-form" type="submit">
				Submit Form
			</DBButton>

			<h2>8. Name &amp; Value</h2>
			<DBButton name="testName" value="testValue">
				Name/Value
			</DBButton>

			<h2>9. ARIA Attributes</h2>
			<DBButton aria-expanded="true">Expanded</DBButton>
			<DBButton aria-pressed="true">Pressed</DBButton>

			<h2>10. Width</h2>
			<DBButton width="full">Full width</DBButton>
			<DBButton width="auto">Auto width</DBButton>

			<h2>11. Icon Visibility</h2>
			<DBButton icon="check" showIcon={false}>
				Icon Hidden
			</DBButton>

			<h2>12. Custom Class</h2>
			<DBButton className="my-custom-class">Custom Class</DBButton>

			<h2>13. Click Event</h2>
			<DBButton onClick={() => alert('Button clicked!')}>
				Click Me
			</DBButton>
		</>
	);
}
