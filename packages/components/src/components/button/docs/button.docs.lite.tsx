import { useDefaultProps, useMetadata } from '@builder.io/mitosis';
import type { DBButtonProps } from '../model';
import { DBButton } from '../index';

export default function ButtonDocs() {
	useMetadata({ docs: true });

	useDefaultProps<DBButtonProps>({
		variant: 'filled',
		size: 'medium',
		text: 'Click me',
		icon: 'check',
		disabled: false,
		type: 'button',
		form: '',
		name: 'myButton',
		value: 'myValue',
		ariaexpanded: false,
		ariapressed: false,
		noText: false,
		width: '200px',
		showIcon: true,
		label: 'Save changes'
	});

	return (
		<>
			<h1>DBButton Documentation Examples</h1>

			<h2>1. Default Button</h2>
			<DBButton />

			<h2>2. Variants</h2>
			<DBButton variant="filled">Filled</DBButton>
			<DBButton variant="outlined">Outlined</DBButton>
			<DBButton variant="ghost">Ghost</DBButton>
			<DBButton variant="brand">Brand</DBButton>

			<h2>3. Sizes</h2>
			<DBButton size="small">Small</DBButton>
			<DBButton size="medium">Medium</DBButton>
			<DBButton size="large">Large</DBButton>

			<h2>4. Loading State</h2>
			<DBButton state="loading">Loading</DBButton>

			<h2>5. Icon Only</h2>
			<DBButton icon="check" noText />

			<h2>6. Disabled</h2>
			<DBButton disabled>Disabled</DBButton>

			<h2>7. Button Types</h2>
			<DBButton type="button">Type=button</DBButton>
			<DBButton type="submit">Type=submit</DBButton>
			<DBButton type="reset">Type=reset</DBButton>

			<h2>8. Form Association</h2>
			<form id="example-form">
				<input name="exampleInput" placeholder="Example input" />
			</form>
			<DBButton form="example-form" type="submit">
				Submit Form
			</DBButton>

			<h2>9. Name &amp; Value</h2>
			<DBButton name="testName" value="testValue">
				Name/Value
			</DBButton>

			<h2>10. ARIA Attributes</h2>
			<DBButton ariaexpanded>Expanded</DBButton>
			<DBButton ariapressed>Pressed</DBButton>

			<h2>11. Width</h2>
			<DBButton width="100px">100px width</DBButton>
			<DBButton width="50%">50% width</DBButton>

			<h2>12. Icon Visibility</h2>
			<DBButton icon="check" showIcon={false}>
				Icon Hidden
			</DBButton>

			<h2>13. Custom Class</h2>
			<DBButton className="my-custom-class">Custom Class</DBButton>

			<h2>14. Click Event</h2>
			<DBButton onClick={() => alert('Button clicked!')}>
				Click Me
			</DBButton>
		</>
	);
}
