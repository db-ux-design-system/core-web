import { Fragment, useMetadata, useStore } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBCustomSelect from '../custom-select.lite';
import { StorybookCustomSelectArgTypes } from './_custom-select.arg.types';

useMetadata({
	storybookTitle: 'Auto Complete',
	storybookNames: ['Auto Complete'],
	storybookArgTypes: StorybookCustomSelectArgTypes
});

type CustomSelectAutoCompleteState = {
	submittedCountry?: string;
	getReadout: () => string;
	handleSubmit: (event: any) => void;
};

/**
 * Browser autofill writes into the hidden backing `<select>` that carries
 * `autoComplete`. User agents may require that select to have a name, to sit
 * inside a form, and that form to own a submit button, so this example provides
 * all three (see the
 * [`autocomplete` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/autocomplete)).
 * The token and the option values have to be real as well - no browser fills a
 * country field with "Option 1".
 */
export default function CustomSelectAutoComplete() {
	const state = useStore<CustomSelectAutoCompleteState>({
		submittedCountry: undefined,
		// Falls back to "-" for an empty submit as well: a form submitted without
		// a selection yields "" rather than undefined.
		getReadout: (): string => {
			return `Submitted country: ${state.submittedCountry || '-'}`;
		},
		handleSubmit: (event: any) => {
			event.preventDefault();

			const data = new FormData(event.target as HTMLFormElement);
			state.submittedCountry = String(data.get('country') ?? '');
		}
	});

	return (
		<Fragment>
			<form onSubmit={(event) => state.handleSubmit(event)}>
				<div class="db-stack" data-gap="fixed-md">
					<div style={{ width: '200px' }}>
						<DBCustomSelect
							autoComplete="country"
							name="country"
							label="Country"
							placeholder="Choose a country"
							options={[
								{ value: 'DE', label: 'Germany' },
								{ value: 'AT', label: 'Austria' },
								{ value: 'CH', label: 'Switzerland' },
								{ value: 'FR', label: 'France' }
							]}
						/>
					</div>
					<div>
						<DBButton type="submit" variant="brand">
							Submit
						</DBButton>
					</div>
					<p data-sb-replace="Submitted country: -">
						{state.getReadout()}
					</p>
				</div>
			</form>
		</Fragment>
	);
}
