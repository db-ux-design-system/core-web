import { DBRadio } from '../index';

export default function Radio() {
	return (
		<>
			<h1>DBRadio Documentation Examples</h1>

			<h2>1. Default Radio</h2>
			<DBRadio label="Default Radio" />

			<h2>2. Sizes</h2>
			<DBRadio size="small" label="Small Radio" />
			<DBRadio size="medium" label="Medium Radio" />

			<h2>3. Validation States</h2>
			<DBRadio validation="valid" label="Valid Radio" />
			<DBRadio validation="invalid" label="Invalid Radio" />
			<DBRadio validation="no-validation" label="No Validation Radio" />

			<h2>4. Disabled State</h2>
			<DBRadio disabled label="Disabled Radio" />

			<h2>5. Change Event Example</h2>
			<DBRadio
				label="Change Event"
				onChange={(event: any) =>
					console.log('Change event:', event.target.checked)
				}
			/>
		</>
	);
}
