import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBBadge from '../badge.lite';
import { StorybookBadgeArgTypes } from './_badge.arg.types';

useMetadata({
	storybookTitle: 'Placement',
	storybookNames: [
		'(Default) Inline',
		'Corner - Top - Left',
		'Corner - Center - Left',
		'Corner - Bottom- Left',
		'Corner - Top - Right',
		'Corner - Center - Right',
		'Corner - Bottom- Right'
	],
	storybookArgTypes: StorybookBadgeArgTypes
});

export default function BadgePlacement() {
	return (
		<Fragment>
			<DBBadge placement="inline">(Default) Inline</DBBadge>
			<DBBadge placement="corner-top-left"></DBBadge>
			<DBBadge placement="corner-center-left"></DBBadge>
			<DBBadge placement="corner-bottom-left"></DBBadge>
			<DBBadge placement="corner-top-right"></DBBadge>
			<DBBadge placement="corner-center-right"></DBBadge>
			<DBBadge placement="corner-bottom-right"></DBBadge>
		</Fragment>
	);
}
