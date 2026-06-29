import { DBSelect } from '../index';

export default function Select() {
	function getOptions() {
		return [
			{ id: '1', label: 'Option 1', selected: false },
			{ id: '2', label: 'Option 2', selected: true },
			{ id: '3', label: 'Option 3', disabled: true }
		];
	}

	return (
		<>
			<h1>DBSelect Documentation Examples</h1>

			<h2>1. Default Select</h2>
			<DBSelect label="Default Select">
				<option value="1">Option 1</option>
				<option value="2" disabled>
					Option 2
				</option>
			</DBSelect>

			<h2>2. Options Array</h2>
			<DBSelect label="Select with Options" options={getOptions()} />

			<h2>3. Multiple Select</h2>
			<DBSelect multiple label="Multiple Select">
				<option value="1">Option 1</option>
				<option value="2" disabled>
					Option 2
				</option>
			</DBSelect>

			<h2>4. Disabled State</h2>
			<DBSelect disabled label="Disabled Select">
				<option value="1">Option 1</option>
				<option value="2" disabled>
					Option 2
				</option>
			</DBSelect>

			<h2>5. Validation States</h2>
			<DBSelect validation="valid" label="Valid Select">
				<option value="1">Option 1</option>
				<option value="2" disabled>
					Option 2
				</option>
			</DBSelect>
			<DBSelect validation="invalid" label="Invalid Select">
				<option value="1">Option 1</option>
				<option value="2" disabled>
					Option 2
				</option>
			</DBSelect>
			<DBSelect validation="no-validation" label="No Validation Select">
				<option value="1">Option 1</option>
				<option value="2" disabled>
					Option 2
				</option>
			</DBSelect>

			<h2>6. Change Event Example</h2>
			<DBSelect
				label="Change Event"
				onChange={(event: any) =>
					console.log('Change event:', event.target.value)
				}>
				<option value="1">Option 1</option>
				<option value="2" disabled>
					Option 2
				</option>
			</DBSelect>
		</>
	);
}
