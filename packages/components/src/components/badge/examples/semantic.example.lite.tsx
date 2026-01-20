import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBadge from '../badge.lite';
import { StorybookBadgeArgTypes } from './_badge.arg.types';

useMetadata({
	storybookTitle: 'Semantic',
	storybookNames: [
		'(Default) Adaptive',
		'Critical',
		'Informational',
		'Neutral',
		'Successful',
		'Warning',
		'Adaptive Strong',
		'Critical Strong',
		'Informational Strong',
		'Neutral Strong',
		'Successful Strong',
		'Warning Strong'
	],
	storybookArgTypes: StorybookBadgeArgTypes
});

export default function BadgeSemantic() {
	return (
		<Fragment>
			<DBBadge>(Default) Adaptive</DBBadge>
			<DBBadge semantic="critical">Critical</DBBadge>
			<DBBadge semantic="informational">Informational</DBBadge>
			<DBBadge semantic="neutral">Neutral</DBBadge>
			<DBBadge semantic="successful">Successful</DBBadge>
			<DBBadge semantic="warning">Warning</DBBadge>
			<i class="line-break" />
			<DBBadge emphasis="strong">Adaptive Strong</DBBadge>
			<DBBadge semantic="critical" emphasis="strong">
				Critical Strong
			</DBBadge>
			<DBBadge semantic="informational" emphasis="strong">
				Informational Strong
			</DBBadge>
			<DBBadge semantic="neutral" emphasis="strong">
				Neutral Strong
			</DBBadge>
			<DBBadge semantic="successful" emphasis="strong">
				Successful Strong
			</DBBadge>
			<DBBadge semantic="warning" emphasis="strong">
				Warning Strong
			</DBBadge>
		</Fragment>
	);
}
