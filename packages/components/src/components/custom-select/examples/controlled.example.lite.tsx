import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBCustomSelect from '../custom-select.lite';
import type { CustomSelectOptionType } from '../model';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Controlled',
	storybookNames: ['Controlled Options And Values (External State)'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

type CustomSelectControlledState = {
	options: CustomSelectOptionType[];
	values?: string[];
	selectionCount: number;
	getReadout: () => string;
	countSelection: () => void;
	loadOtherOptions: () => void;
	clearOptionsAndSelection: () => void;
	restoreOptions: () => void;
};

export default function CustomSelectControlled() {
	const state = useStore<CustomSelectControlledState>({
		options: [
			{ value: 'de', label: 'Germany' },
			{ value: 'at', label: 'Austria' }
		],
		// Starts without a selection on purpose: with selectedType="tag" every
		// selected option renders a removable DBTag inside the interactive
		// <summary>, which axe-core reports as `nested-interactive`. The buttons
		// below drive the selection, so the controlled synchronization is still
		// demonstrated without shipping that violation on page load.
		values: undefined,
		selectionCount: 0,
		// Built in one expression: Mitosis drops JSX whitespace such as {' '}
		getReadout: () => {
			return `Selections by user: ${state.selectionCount}`;
		},
		countSelection: () => {
			state.selectionCount = state.selectionCount + 1;
		},
		loadOtherOptions: () => {
			state.options = [
				{ value: 'ch', label: 'Switzerland' },
				{ value: 'fr', label: 'France' }
			];
			state.values = ['ch'];
		},
		clearOptionsAndSelection: () => {
			state.options = [];
			state.values = [];
		},
		restoreOptions: () => {
			state.options = [
				{ value: 'de', label: 'Germany' },
				{ value: 'at', label: 'Austria' }
			];
			state.values = undefined;
		}
	});

	return (
		<Fragment>
			<div class="db-stack" data-gap="fixed-md">
				<div
					data-sb-replace="Use external buttons to change options and selection"
					class="db-stack"
					data-gap="fixed-xs"
					data-direction="row">
					<DBButton
						variant="outlined"
						onClick={() => state.loadOtherOptions()}>
						Load other options
					</DBButton>
					<DBButton
						variant="outlined"
						onClick={() => state.clearOptionsAndSelection()}>
						Clear options and selection
					</DBButton>
					<DBButton
						variant="outlined"
						onClick={() => state.restoreOptions()}>
						Restore options without selection
					</DBButton>
				</div>
				<div style={{ width: '200px' }}>
					<DBCustomSelect
						label="Country"
						multiple={true}
						options={state.options}
						placeholder="Choose countries"
						selectedType="tag"
						values={state.values}
						onOptionSelected={() => state.countSelection()}
					/>
					<p data-sb-replace="Selections by user: 0">
						{state.getReadout()}
					</p>
				</div>
			</div>
		</Fragment>
	);
}
