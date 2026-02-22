import { DBSwitch } from '../index';

export default function Switch() {
	return (
		<>
			<h1>DBSwitch Documentation Examples</h1>

			<h2>1. Default Switch</h2>
			<DBSwitch label="Default Switch" />

			<h2>2. Visual Aid</h2>
			<DBSwitch visualAid={true} label="Switch with Visual Aid" />
			<DBSwitch visualAid={false} label="Switch without Visual Aid" />

			<h2>3. Sizes</h2>
			<DBSwitch size="small" label="Small Switch" />
			<DBSwitch size="medium" label="Medium Switch" />

			<h2>4. Validation States</h2>
			<DBSwitch validation="valid" label="Valid Switch" />
			<DBSwitch validation="invalid" label="Invalid Switch" />
			<DBSwitch validation="no-validation" label="No Validation Switch" />

			<h2>5. Disabled State</h2>
			<DBSwitch disabled label="Disabled Switch" />

			<h2>6. Icon Support</h2>
			<DBSwitch icon="check" label="Switch with Icon" />
			<DBSwitch iconLeading="user" label="Switch with Leading Icon" />
			<DBSwitch iconTrailing="arrow" label="Switch with Trailing Icon" />

			<h2>7. Change Event Example</h2>
			<DBSwitch
				label="Change Event"
				onChange={(event: any) =>
					console.log('Change event:', event.target.checked)
				}
			/>
		</>
	);
}
