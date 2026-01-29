import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBIcon from '../icon.lite';
import { StorybookIconArgTypes } from './_icon.arg.types';

useMetadata({
	storybookTitle: 'Density',
	storybookNames: ['Functional', '(Default) Regular', 'Expressive'],
	storybookArgTypes: StorybookIconArgTypes
});

export default function IconDensity() {
	return (
		<Fragment>
			<div data-density="functional">
				<DBInfotext icon="none" size="small" semantic="informational">
					Functional
				</DBInfotext>
				<DBIcon data-density="functional" icon="x_placeholder">
					Functional
				</DBIcon>
			</div>
			<div data-density="regular">
				<DBInfotext icon="none" size="small" semantic="informational">
					(Default) Regular
				</DBInfotext>
				<DBIcon data-density="regular" icon="x_placeholder">
					(Default) Regular
				</DBIcon>
			</div>
			<div data-density="expressive">
				<DBInfotext icon="none" size="small" semantic="informational">
					Expressive
				</DBInfotext>
				<DBIcon data-density="expressive" icon="x_placeholder">
					Expressive
				</DBIcon>
			</div>
		</Fragment>
	);
}
