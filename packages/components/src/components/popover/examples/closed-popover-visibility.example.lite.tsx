import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBCheckbox from '../../checkbox/checkbox.lite';
import DBInput from '../../input/input.lite';
import DBSwitch from '../../switch/switch.lite';
import DBTextarea from '../../textarea/textarea.lite';
import DBPopover from '../popover.lite';
import { StorybookPopoverArgTypes } from './_popover.arg.types';

useMetadata({
	storybookTitle: 'Closed Popover Visibility',
	storybookNames: [
		'Switch',
		'Switch Visual Aid',
		'Switch Visual Aid Closed',
		'Input',
		'Checkbox',
		'Textarea'
	],
	storybookArgTypes: StorybookPopoverArgTypes
});

export default function PopoverClosedVisibility() {
	return (
		<Fragment>
			<DBPopover
				id="popover-closed-visibility-switch"
				trigger={<DBButton>Switch</DBButton>}>
				<DBSwitch>Switch me</DBSwitch>
			</DBPopover>
			<DBPopover
				id="popover-closed-visibility-switch-visual-aid"
				trigger={<DBButton>Switch Visual Aid</DBButton>}>
				<DBSwitch visualAid={true}>Switch me</DBSwitch>
			</DBPopover>
			{/* Kept closed (open={false}) so the visual snapshot verifies the
			    visual-aid icon does not bleed through a closed popover (#7735).
			    hoverPre() forces every other popover open, but the SCSS excludes
			    [data-open="false"], so this one stays closed during the test. */}
			<DBPopover
				id="popover-closed-visibility-switch-visual-aid-closed"
				open={false}
				trigger={<DBButton>Switch Visual Aid Closed</DBButton>}>
				<DBSwitch visualAid={true}>Switch me</DBSwitch>
			</DBPopover>
			<DBPopover
				id="popover-closed-visibility-input"
				trigger={<DBButton>Input</DBButton>}>
				<DBInput label="Input" icon="search" />
			</DBPopover>
			<DBPopover
				id="popover-closed-visibility-checkbox"
				trigger={<DBButton>Checkbox</DBButton>}>
				<DBCheckbox>Check me</DBCheckbox>
			</DBPopover>
			<DBPopover
				id="popover-closed-visibility-textarea"
				trigger={<DBButton>Textarea</DBButton>}>
				<DBTextarea label="Textarea" />
			</DBPopover>
		</Fragment>
	);
}
