import { DBCustomSelect } from '../index';

export default function CustomSelect() {
	function getOptions() {
		return [
			{ value: '1', label: 'Option 1', selected: false },
			{ value: '2', label: 'Option 2', disabled: true },
			{ value: '3', label: 'Option 3' }
		];
	}

	return (
		<>
			<h1>DBCustomSelect Documentation Examples</h1>

			<h2>1. Default Custom Select</h2>
			<DBCustomSelect
				label="Default Custom Select"
				options={getOptions()}
			/>

			<h2>3. Multiple Select</h2>
			<DBCustomSelect
				multiple
				label="Multiple Custom Select"
				options={getOptions()}
			/>

			<h2>4. Disabled State</h2>
			<DBCustomSelect
				disabled
				label="Disabled Custom Select"
				options={getOptions()}
			/>

			<h2>5. Validation States</h2>
			<DBCustomSelect
				validMessage="This is a valid selection"
				validation="valid"
				label="Valid Custom Select"
				options={getOptions()}
			/>
			<DBCustomSelect
				invalidMessage="This is an invalid selection"
				validation="invalid"
				label="Invalid Custom Select"
				options={getOptions()}
			/>
			<DBCustomSelect
				validation="no-validation"
				label="No Validation Custom Select"
				options={getOptions()}
			/>

			<h2>6. Change Event Example</h2>
			<DBCustomSelect
				label="Change Event"
				onChange={(event: any) =>
					console.log('Change event:', event.target.value)
				}
				options={getOptions()}
			/>

			<h2>7. Placeholder Example</h2>
			<DBCustomSelect
				label="Custom Select with Placeholder"
				placeholder="Select an option"
				options={getOptions()}
			/>
		</>
	);
}
