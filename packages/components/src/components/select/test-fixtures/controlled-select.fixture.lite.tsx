import { For, Fragment, useStore } from '@builder.io/mitosis';
import DBSelect from '../select.lite';

export default function ControlledSelectHarness() {
	const state = useStore({
		values: {} as Record<string, string>,
		scenarios: [
			{
				id: 'required-default',
				required: true,
				showEmptyOption: undefined,
				variant: undefined
			},
			{
				id: 'required-show-empty',
				required: true,
				showEmptyOption: true,
				variant: undefined
			},
			{
				id: 'optional-default',
				required: false,
				showEmptyOption: undefined,
				variant: undefined
			},
			{
				id: 'required-floating',
				required: true,
				showEmptyOption: undefined,
				variant: 'floating' as const
			}
		],
		setValue(id: string, event: any) {
			state.values = { ...state.values, [id]: event.target.value };
		}
	});

	return (
		<Fragment>
			<For each={state.scenarios}>
				{(scenario) => (
					<section data-testid={`scenario-${scenario.id}`}>
						<output data-testid="controlled-value">
							{state.values[scenario.id] ?? ''}
						</output>
						<DBSelect
							label={`${scenario.id} label`}
							placeholder="Choose an option"
							required={scenario.required}
							showEmptyOption={scenario.showEmptyOption}
							value={state.values[scenario.id] ?? ''}
							variant={scenario.variant}
							onChange={(event) =>
								state.setValue(scenario.id, event)
							}>
							<option value="first">First option</option>
							<option value="second">Second option</option>
						</DBSelect>
					</section>
				)}
			</For>
		</Fragment>
	);
}
