import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBIcon from '../icon.lite';
import { StorybookIconComponentArgTypes } from './_icon.arg.types';

useMetadata({
	storybookTitle: 'Variant',
	storybookNames: ['(Default) Default', 'Filled'],
	storybookArgTypes: StorybookIconComponentArgTypes
});

export default function IconVariant() {
	return (
		<Fragment>
			<div>
				<DBInfotext icon="none" size="small" semantic="informational">
					(Default) Default
				</DBInfotext>
				<DBIcon icon="exclamation_mark_triangle" weight="32" />
			</div>
			<div>
				<DBInfotext icon="none" size="small" semantic="informational">
					Filled
				</DBInfotext>
				<DBIcon
					icon="exclamation_mark_triangle"
					variant="filled"
					weight="32"
				/>
			</div>
		</Fragment>
	);
}
