import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBadge from '../../badge/badge.lite';
import DBCustomButton from '../../custom-button/custom-button.lite';
import DBIcon from '../../icon/icon.lite';
import DBCustomHeading from '../custom-heading.lite';
import { StorybookHeadingArgTypes } from './_heading.arg.types';

useMetadata({
	storybookTitle: 'Start and end slot',
	storybookComponentName: 'DBCustomHeading',
	storybookComponentNames: ['DBCustomHeading', 'DBCustomHeading'],
	storybookNames: ['End slot with a badge', 'Both slots with an action'],
	storybookArgTypes: StorybookHeadingArgTypes
});

export default function HeadingSlots() {
	return (
		<Fragment>
			<DBCustomHeading
				endSlot={
					<DBBadge semantic="critical" emphasis="strong">
						3
					</DBBadge>
				}>
				<h2>Current disruptions</h2>
			</DBCustomHeading>
			<DBCustomHeading
				startSlot={<DBIcon icon="x_placeholder" />}
				endSlot={
					<DBCustomButton
						variant="ghost"
						icon="more_vertical"
						noText={true}>
						<button type="button">More options</button>
					</DBCustomButton>
				}>
				<h2>Installation</h2>
			</DBCustomHeading>
		</Fragment>
	);
}
