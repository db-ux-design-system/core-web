import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
import DBButton from '../button.lite';
import { StorybookButtonArgTypes } from './_button.arg.types';

import { fn } from '../../../shared/examples';

useMetadata({
	storybookTitle: 'Slot',
	storybookNames: ['End slot with a badge'],
	storybookArgTypes: StorybookButtonArgTypes
});

export default function ButtonSlot() {
	return (
		<Fragment>
			<DBButton
				onClick={fn}
				endSlot={
					<DBBadge semantic="critical" emphasis="strong">
						3
					</DBBadge>
				}>
				Notifications
			</DBButton>
		</Fragment>
	);
}
