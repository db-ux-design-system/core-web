import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBTag from '../tag.lite';
import { StorybookTagArgTypes } from './_tag.arg.types';

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
	storybookArgTypes: StorybookTagArgTypes
});

export default function TagSemantic() {
	return (
		<Fragment>
			<DBTag>(Default) Adaptive</DBTag>
			<DBTag semantic="critical">Critical</DBTag>
			<DBTag semantic="informational">Informational</DBTag>
			<DBTag semantic="neutral">Neutral</DBTag>
			<DBTag semantic="successful">Successful</DBTag>
			<DBTag semantic="warning">Warning</DBTag>

			<i className="line-break" />

			<i className="line-break" />
			<DBTag emphasis="strong">Adaptive Strong</DBTag>
			<DBTag semantic="critical" emphasis="strong">
				Critical Strong
			</DBTag>
			<DBTag semantic="informational" emphasis="strong">
				Informational Strong
			</DBTag>
			<DBTag semantic="neutral" emphasis="strong">
				Neutral Strong
			</DBTag>
			<DBTag semantic="successful" emphasis="strong">
				Successful Strong
			</DBTag>
			<DBTag semantic="warning" emphasis="strong">
				Warning Strong
			</DBTag>
		</Fragment>
	);
}
