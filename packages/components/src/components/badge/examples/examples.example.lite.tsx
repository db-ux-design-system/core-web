import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBIcon from '../../icon/icon.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBBadge from '../badge.lite';

useMetadata({
	storybookIgnore: true
});

export default function BadgeExamples() {
	return (
		<Fragment>
			<DBBadge semantic="successful">9</DBBadge>
			<DBBadge semantic="informational">12</DBBadge>
			<DBBadge semantic="warning">123</DBBadge>
			<DBBadge size="small" emphasis="strong" semantic="successful">
				9
			</DBBadge>
			<DBBadge size="small" emphasis="strong" semantic="informational">
				12
			</DBBadge>
			<DBBadge size="small" emphasis="strong" semantic="warning">
				123
			</DBBadge>
			<DBInfotext
				data-sb-ignore="true"
				semantic="informational"
				size="small"
				icon="none">
				Numbers
			</DBInfotext>
			<i class="line-break" />
			<DBBadge size="medium">(Default) Text - Medium</DBBadge>
			<DBBadge size="medium" />
			<DBInfotext
				data-sb-ignore="true"
				semantic="informational"
				size="small"
				icon="none">
				Dot - Medium
			</DBInfotext>
			<DBBadge semantic="critical" emphasis="strong" size="medium">
				<DBIcon icon="x_placeholder">Icon - Medium</DBIcon>
			</DBBadge>
			<DBInfotext
				data-sb-ignore="true"
				semantic="informational"
				size="small"
				icon="none">
				Icon - Medium
			</DBInfotext>
		</Fragment>
	);
}
