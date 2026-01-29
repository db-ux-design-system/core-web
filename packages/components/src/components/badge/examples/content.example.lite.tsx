import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBIcon from '../../icon/icon.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBBadge from '../badge.lite';
import { StorybookBadgeArgTypes } from './_badge.arg.types';

useMetadata({
	storybookTitle: 'Content',
	storybookNames: ['(Default) Text', 'Dot - Small', 'Icon - Small'],
	storybookArgTypes: StorybookBadgeArgTypes
});

export default function BadgeContent() {
	return (
		<Fragment>
			<DBBadge>(Default) Text</DBBadge>
			<DBBadge />
			<DBInfotext semantic="informational" size="small" icon="none">
				Dot - Small
			</DBInfotext>
			<DBBadge semantic="critical" emphasis="strong">
				<DBIcon icon="x_placeholder">Icon - Small</DBIcon>
			</DBBadge>
			<DBInfotext semantic="informational" size="small" icon="none">
				Icon - Small
			</DBInfotext>
		</Fragment>
	);
}
