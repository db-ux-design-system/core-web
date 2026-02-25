import { useMetadata } from '@builder.io/mitosis';
import DBTag from '../tag.lite';
import { StorybookTagArgTypes } from './_tag.arg.types';

useMetadata({
	storybookTitle: 'Behavior',
	storybookNames: [
		'(Default) Static',
		'Removable',
		'Interactive (Button)',
		'Interactive (Link)',
		'Interactive (Checkbox)',
		'Interactive (Radio)',
		'Interactive Radio 2'
	],
	storybookArgTypes: StorybookTagArgTypes
});

export default function TagBehavior() {
	return (
		<div role="group" aria-label="Behavior">
			<DBTag>(Default) Static</DBTag>
			<DBTag behavior="removable">Removable</DBTag>

			<i class="line-break" data-sb-ignore="true" />
			<DBTag>
				<button>Interactive (Button)</button>
			</DBTag>
			<DBTag>
				<a href="#">Interactive (Link)</a>
			</DBTag>

			<i class="line-break" data-sb-ignore="true" />
			<DBTag>
				<label>
					<input type="checkbox" />
					Interactive (Checkbox)
				</label>
			</DBTag>
			<DBTag>
				<label>
					<input type="radio" name="radio01" />
					Interactive (Radio)
				</label>
			</DBTag>
			<DBTag>
				<label>
					<input type="radio" name="radio01" />
					Interactive Radio 2
				</label>
			</DBTag>
		</div>
	);
}
