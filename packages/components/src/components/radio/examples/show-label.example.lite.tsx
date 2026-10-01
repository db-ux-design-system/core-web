import { useMetadata } from '@builder.io/mitosis';
import DBInfotext from '../../infotext/infotext.lite';
import DBRadio from '../radio.lite';
import { StorybookRadioArgTypes } from './_radio.arg.types';

useMetadata({
	storybookTitle: 'Show Label',
	storybookNames: ['(Default) True', 'False'],
	storybookArgTypes: StorybookRadioArgTypes
});

export default function RadioShowLabel() {
	return (
		<>
			<fieldset>
				<legend>(Default) True - rate your experience</legend>
				<DBRadio name="RatingVisible" value="good" showLabel={true}>
					Good
				</DBRadio>
				<DBRadio name="RatingVisible" value="neutral" showLabel={true}>
					Neutral
				</DBRadio>
				<DBRadio name="RatingVisible" value="bad" showLabel={true}>
					Bad
				</DBRadio>
			</fieldset>
			<fieldset>
				<legend>False - rate your experience</legend>
				<DBRadio name="RatingHidden" value="good" showLabel={false}>
					Good
				</DBRadio>
				<DBRadio name="RatingHidden" value="neutral" showLabel={false}>
					Neutral
				</DBRadio>
				<DBRadio name="RatingHidden" value="bad" showLabel={false}>
					Bad
				</DBRadio>
				<DBInfotext semantic="informational" size="small" icon="none">
					Labels are visually hidden but still read by screen readers.
				</DBInfotext>
			</fieldset>
		</>
	);
}
