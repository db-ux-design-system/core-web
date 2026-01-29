import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTag from '../tag.lite';
import { StorybookTagArgTypes } from './_tag.arg.types';

useMetadata({
	storybookTitle: 'Checked',
	storybookNames: ['(Default) False', 'True'],
	storybookArgTypes: StorybookTagArgTypes
});

export default function TagChecked() {
	return (
		<Fragment>
			<div role="group" aria-label="Checked">
				<DBTag>
					<label>
						<input type="checkbox" />
						(Default) False
					</label>
				</DBTag>
				<DBTag>
					<label>
						<input type="checkbox" checked={true} />
						True
					</label>
				</DBTag>
			</div>
		</Fragment>
	);
}
