import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBIcon from '../../icon/icon.lite';
import DBInfotext from '../../infotext/infotext.lite';
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
			<div class="badge-inline-container">
				<span data-icon="x_placeholder">(Default) Inline</span>
				<DBBadge size="small" emphasis="strong" semantic="critical">
					Label
				</DBBadge>
				<DBIcon icon="error" />
			</div>
			<div>
				<DBButton icon="x_placeholder" variant="outlined" noText>
					<DBBadge
						size="small"
						emphasis="strong"
						semantic="critical"
						placement="corner-top-left"></DBBadge>
					Corner - Top - Left
				</DBButton>
				<DBInfotext semantic="informational" size="small" icon="none">
					Corner - Top - Left
				</DBInfotext>
			</div>
			<div>
				<DBButton icon="x_placeholder" variant="outlined" noText>
					<DBBadge
						size="small"
						emphasis="strong"
						semantic="critical"
						placement="corner-center-left"></DBBadge>
					Corner - Center - Left
				</DBButton>
				<DBInfotext semantic="informational" size="small" icon="none">
					Corner - Center - Left
				</DBInfotext>
			</div>
			<div>
				<DBButton icon="x_placeholder" variant="outlined" noText>
					<DBBadge
						size="small"
						emphasis="strong"
						semantic="critical"
						placement="corner-bottom-left"></DBBadge>
					Corner - Bottom- Left
				</DBButton>
				<DBInfotext semantic="informational" size="small" icon="none">
					Corner - Bottom- Left
				</DBInfotext>
			</div>
			<div>
				<DBButton icon="x_placeholder" variant="outlined" noText>
					<DBBadge
						size="small"
						emphasis="strong"
						semantic="critical"
						placement="corner-top-right"></DBBadge>
					Corner - Top - Right
				</DBButton>
				<DBInfotext semantic="informational" size="small" icon="none">
					Corner - Top - Right
				</DBInfotext>
			</div>
			<div>
				<DBButton icon="x_placeholder" variant="outlined" noText>
					<DBBadge
						size="small"
						emphasis="strong"
						semantic="critical"
						placement="corner-center-right"></DBBadge>
					Corner - Center - Right
				</DBButton>
				<DBInfotext semantic="informational" size="small" icon="none">
					Corner - Center - Right
				</DBInfotext>
			</div>
			<div>
				<DBButton icon="x_placeholder" variant="outlined" noText>
					<DBBadge
						size="small"
						emphasis="strong"
						semantic="critical"
						placement="corner-bottom-right"></DBBadge>
					Corner - Bottom- Right
				</DBButton>
				<DBInfotext semantic="informational" size="small" icon="none">
					Corner - Bottom- Right
				</DBInfotext>
			</div>
		</Fragment>
	);
}
