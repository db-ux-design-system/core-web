import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBSelect from '../select.lite';
import { StorybookSelectArgTypes } from './_select.arg.types';

useMetadata({
	storybookTitle: 'Controlled',
	storybookNames: [
		'Required',
		'Required With Empty Option',
		'Optional',
		'Required Floating'
	],
	storybookArgTypes: StorybookSelectArgTypes
});

type SelectControlledState = {
	requiredValue: string;
	emptyOptionValue: string;
	optionalValue: string;
	floatingValue: string;
	getReadout: (label: string, value: string) => string;
	updateRequired: (event: any) => void;
	updateEmptyOption: (event: any) => void;
	updateOptional: (event: any) => void;
	updateFloating: (event: any) => void;
};

export default function SelectControlled() {
	const state = useStore<SelectControlledState>({
		requiredValue: '',
		emptyOptionValue: '',
		optionalValue: '',
		floatingValue: '',
		// Built in one expression: Mitosis drops JSX whitespace such as {' '}
		getReadout: (label: string, value: string) => {
			return `${label}: ${value || 'none'}`;
		},
		updateRequired: (event: any) => {
			state.requiredValue = event.target.value;
		},
		updateEmptyOption: (event: any) => {
			state.emptyOptionValue = event.target.value;
		},
		updateOptional: (event: any) => {
			state.optionalValue = event.target.value;
		},
		updateFloating: (event: any) => {
			state.floatingValue = event.target.value;
		}
	});

	return (
		<Fragment>
			<div style={{ width: '300px' }}>
				<DBSelect
					options={[{ value: 'Option 1' }, { value: 'Option 2' }]}
					label="Required"
					placeholder="Choose an option"
					required={true}
					value={state.requiredValue}
					onChange={(event: any) => state.updateRequired(event)}
				/>
				<p>{state.getReadout('Required', state.requiredValue)}</p>
			</div>
			<div style={{ width: '300px' }}>
				<DBSelect
					options={[{ value: 'Option 1' }, { value: 'Option 2' }]}
					label="With empty option"
					placeholder="Choose an option"
					required={true}
					showEmptyOption={true}
					value={state.emptyOptionValue}
					onChange={(event: any) => state.updateEmptyOption(event)}
				/>
				<p>
					{state.getReadout(
						'With empty option',
						state.emptyOptionValue
					)}
				</p>
			</div>
			<div style={{ width: '300px' }}>
				<DBSelect
					options={[{ value: 'Option 1' }, { value: 'Option 2' }]}
					label="Optional"
					placeholder="Choose an option"
					required={false}
					value={state.optionalValue}
					onChange={(event: any) => state.updateOptional(event)}
				/>
				<p>{state.getReadout('Optional', state.optionalValue)}</p>
			</div>
			<div style={{ width: '300px' }}>
				<DBSelect
					options={[{ value: 'Option 1' }, { value: 'Option 2' }]}
					label="Floating"
					placeholder="Choose an option"
					required={true}
					variant="floating"
					value={state.floatingValue}
					onChange={(event: any) => state.updateFloating(event)}
				/>
				<p>{state.getReadout('Floating', state.floatingValue)}</p>
			</div>
		</Fragment>
	);
}
