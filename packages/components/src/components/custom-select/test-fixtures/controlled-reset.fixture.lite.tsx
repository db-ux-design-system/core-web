import { useRef, useStore } from '@builder.io/mitosis';
import DBCustomSelect from '../custom-select.lite';
import type { CustomSelectOptionType } from '../model';

type ControlledResetState = {
	options: CustomSelectOptionType[];
	values?: string[];
	optionSelectedCalls: number;
	recordOptionSelected: () => void;
	setUpdated: () => void;
	resetBoth: () => void;
	resetValuesToNull: () => void;
	resetValuesToUndefined: () => void;
};

export default function ControlledResetFixture() {
	const _ref = useRef<HTMLDivElement | any>(null);
	const state = useStore<ControlledResetState>({
		options: [
			{ value: 'initial-1', label: 'Initial one' },
			{ value: 'initial-2', label: 'Initial two' }
		],
		values: ['initial-1'],
		optionSelectedCalls: 0,
		recordOptionSelected() {
			state.optionSelectedCalls = state.optionSelectedCalls + 1;
		},
		setUpdated() {
			state.options = [
				{ value: 'updated-1', label: 'Updated one' },
				{ value: 'updated-2', label: 'Updated two' }
			];
			state.values = ['updated-2'];
		},
		resetBoth() {
			state.options = [];
			state.values = [];
		},
		resetValuesToNull() {
			state.options = [
				{ value: 'initial-1', label: 'Initial one' },
				{ value: 'initial-2', label: 'Initial two' }
			];
			state.values = null as any;
		},
		resetValuesToUndefined() {
			state.options = [
				{ value: 'initial-1', label: 'Initial one' },
				{ value: 'initial-2', label: 'Initial two' }
			];
			state.values = undefined;
		}
	});

	return (
		<div ref={_ref}>
			<button data-testid="update" onClick={() => state.setUpdated()}>
				Update
			</button>
			<button data-testid="reset-both" onClick={() => state.resetBoth()}>
				Reset both
			</button>
			<button
				data-testid="reset-values-null"
				onClick={() => state.resetValuesToNull()}>
				Reset values to null
			</button>
			<button
				data-testid="reset-values-undefined"
				onClick={() => state.resetValuesToUndefined()}>
				Reset values to undefined
			</button>
			<output data-testid="option-selected-calls">
				{state.optionSelectedCalls}
			</output>
			<DBCustomSelect
				label="Controlled custom select"
				multiple={true}
				options={state.options}
				placeholder="Choose options"
				selectedType="tag"
				values={state.values}
				onOptionSelected={() => state.recordOptionSelected()}
			/>
		</div>
	);
}
