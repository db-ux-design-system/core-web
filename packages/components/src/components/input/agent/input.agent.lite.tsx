import { DBInput } from '../index';

export default function Input() {
	return (
		<>
			<h1>DBInput Documentation Examples</h1>
			<h2>1. Default Input</h2>
			<DBInput label="Enter text here" />
			<h2>2. Input Types</h2>
			<DBInput type="text" label="Text Input" />
			<DBInput type="email" label="Email Input" />
			<DBInput type="password" label="Password Input" />
			<DBInput type="number" label="Number Input" />
			<h2>3. Sizes</h2>
			<DBInput size="small" label="Small Input" />
			<DBInput size="medium" label="Medium Input" />
			<h2>4. Icon Support</h2>
			<DBInput icon="search" label="Search Input" />
			<DBInput iconLeading="user" label="Leading Icon" />
			<DBInput iconTrailing="check" label="Trailing Icon" />
			<h2>5. Validation States</h2>
			<DBInput validation="valid" label="Valid Input" />
			<DBInput validation="invalid" label="Invalid Input" />
			<DBInput validation="no-validation" label="No Validation" />
			<h2>6. Disabled State</h2>
			<DBInput disabled label="Disabled Input" />
			<h2>7. Custom Class</h2>
			<DBInput className="my-custom-class" label="Custom Class" />
			<h2>8. Placeholder Examples</h2>
			<DBInput placeholder="Enter text here" label="With Placeholder" />
			<DBInput placeholder="Search here" label="Search Placeholder" />
			<h2>9. Input Event Example</h2>
			<DBInput
				label="Input Event"
				onInput={(event: any) =>
					console.log('Input event:', event.target.value)
				}
			/>
			<h2>10. Message Property Example</h2>
			<DBInput
				label="Input with Message"
				message="This is a helper message."
			/>
		</>
	);
}
