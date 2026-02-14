import { useMetadata } from '@builder.io/mitosis';
import DBTag from '../tag.lite';
import { StorybookTagArgTypes } from './_tag.arg.types';

useMetadata({
	storybookTitle: 'Example Strong',
	storybookNames: [
		'Interactive Strong Button with Icon',
		'Interactive Strong Link with Icon',
		'Interactive Strong Checkbox with Icon',
		'Interactive Strong Radio 1 with Icon',
		'Interactive Strong Radio 2 with Icon'
	],
	storybookArgTypes: StorybookTagArgTypes
});

export default function TagExampleStrong() {
	return (
		<div role="group" aria-label="Example Strong">
			<DBTag emphasis="strong" icon="x_placeholder" behavior="removable">
				<button>Interactive Strong Button with Icon</button>
			</DBTag>
			<DBTag emphasis="strong" icon="x_placeholder">
				<a href="#">Interactive Strong Link with Icon</a>
			</DBTag>
			<DBTag emphasis="strong" icon="x_placeholder">
				<label>
					<input type="checkbox" />
					Interactive Strong Checkbox with Icon
				</label>
			</DBTag>
			<DBTag emphasis="strong" icon="x_placeholder">
				<label>
					<input type="radio" name="radio03" />
					Interactive Strong Radio 1 with Icon
				</label>
			</DBTag>
			<DBTag emphasis="strong" icon="x_placeholder">
				<label>
					<input type="radio" name="radio03" />
					Interactive Strong Radio 2 with Icon
				</label>
			</DBTag>
		</div>
	);
}
