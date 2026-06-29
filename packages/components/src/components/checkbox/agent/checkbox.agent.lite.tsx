import { DBCheckbox } from '../index';

export default function Checkbox() {
	return (
		<>
			<h1>DBCheckbox Documentation Examples</h1>

			<h2>1. Default Checkbox</h2>
			<DBCheckbox label="Default Checkbox" />

			<h2>2. Indeterminate State</h2>
			<DBCheckbox indeterminate={true} label="Indeterminate Checkbox" />

			<h2>3. Sizes</h2>
			<DBCheckbox size="small" label="Small Checkbox" />
			<DBCheckbox size="medium" label="Medium Checkbox" />

			<h2>4. Validation States</h2>
			<DBCheckbox validation="valid" label="Valid Checkbox" />
			<DBCheckbox validation="invalid" label="Invalid Checkbox" />
			<DBCheckbox
				validation="no-validation"
				label="No Validation Checkbox"
			/>

			<h2>5. Disabled State</h2>
			<DBCheckbox disabled label="Disabled Checkbox" />

			<h2>6. Message Property Example</h2>
			<DBCheckbox
				label="Checkbox with Message"
				message="This is a helper message."
			/>

			<h2>7. Change Event Example</h2>
			<DBCheckbox
				label="Change Event"
				onChange={(event: any) =>
					console.log('Change event:', event.target.checked)
				}
			/>
		</>
	);
}
