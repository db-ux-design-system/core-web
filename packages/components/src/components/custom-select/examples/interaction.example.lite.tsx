import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

/**
 * Fixtures for the cross-framework interaction e2e tests
 * (see showcases/e2e/custom-select/custom-select-interaction.spec.ts).
 * Each instance is a self-contained scenario ported from the removed
 * component test, addressable via its own `data-testid`.
 */
type CustomSelectInteractionState = {
	resetValues?: string[] | null;
	updateResetValues: (values?: string[] | null) => void;
};

export default function CustomSelectInteraction() {
	// Live equivalent of the removed CT test's unmount+remount-with-new-props
	// pattern: buttons drive `values` through null / undefined / empty array /
	// a real selection, exercising the same reactive prop-sync code path a
	// consumer app would.
	const state = useStore<CustomSelectInteractionState>({
		resetValues: ['Option 1', 'Option 2'],
		updateResetValues(values?: string[] | null) {
			state.resetValues = values;
		}
	});

	return (
		<Fragment>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					data-testid="single-select"
					options={[
						{ value: 'Option 1' },
						{ value: 'Option 2' },
						{ value: 'Option 3' },
						{ value: 'Option 4' },
						{ value: 'Option 5' }
					]}
					label="Single"
					placeholder="Placeholder"
				/>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					data-testid="multiple-select"
					options={[
						{ value: 'Option 1' },
						{ value: 'Option 2' },
						{ value: 'Option 3' },
						{ value: 'Option 4' },
						{ value: 'Option 5' }
					]}
					label="Multiple"
					multiple={true}
					placeholder="Placeholder"
				/>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					data-testid="search-select"
					options={[
						{ value: 'Option 1' },
						{ value: 'Option 2' },
						{ value: 'Option 3' },
						{ value: 'Option 4' },
						{ value: 'Option 5' }
					]}
					label="Search"
					multiple={true}
					showSearch={true}
					showSelectAll={true}
					placeholder="Placeholder"
				/>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					data-testid="select-all-select"
					options={[
						{ value: 'Option 1' },
						{ value: 'Option 2' },
						{ value: 'Option 3' },
						{ value: 'Option 4' },
						{ value: 'Option 5' }
					]}
					label="Select all"
					multiple={true}
					showSelectAll={true}
					placeholder="Placeholder"
				/>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					data-testid="option-groups-select"
					options={[
						{ label: 'Option group 1', isGroupTitle: true },
						{ value: 'G1:Option 1' },
						{ value: 'G1:Option 2' },
						{ label: 'Option group 2', isGroupTitle: true },
						{ value: 'G2:Option 1' },
						{ value: 'G2:Option 2' }
					]}
					label="Option Groups"
					placeholder="Placeholder"
				/>
			</div>
			<div style={{ width: '200px' }}>
				<DBCustomSelect
					data-testid="tag-select"
					options={[
						{ value: 'Red', label: 'Red Color' },
						{ value: 'Blue', label: 'Blue Color' },
						{ value: 'Green', label: 'Green Color' }
					]}
					label="Colors"
					multiple={true}
					selectedType="tag"
					removeTagsTexts={[
						'Remove Red Color',
						'Remove Blue Color',
						'Remove Green Color'
					]}
					values={['Blue', 'Green']}
					placeholder="Select colors"
				/>
			</div>

			<div style={{ width: '200px' }}>
				<DBButton
					data-testid="values-reset-set"
					onClick={() =>
						state.updateResetValues(['Option 1', 'Option 2'])
					}>
					Set values
				</DBButton>
				<DBButton
					data-testid="values-reset-null"
					onClick={() => state.updateResetValues(null)}>
					Reset to null
				</DBButton>
				<DBButton
					data-testid="values-reset-undefined"
					onClick={() => state.updateResetValues(undefined)}>
					Reset to undefined
				</DBButton>
				<DBButton
					data-testid="values-reset-empty"
					onClick={() => state.updateResetValues([])}>
					Reset to empty array
				</DBButton>
				<DBCustomSelect
					data-testid="values-reset-select"
					options={[{ value: 'Option 1' }, { value: 'Option 2' }]}
					label="Values reset"
					multiple={true}
					values={state.resetValues ?? undefined}
					placeholder="Placeholder"
				/>
			</div>
		</Fragment>
	);
}
