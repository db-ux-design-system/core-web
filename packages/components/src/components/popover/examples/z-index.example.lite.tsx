import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBCheckbox from '../../checkbox/checkbox.lite';
import DBInput from '../../input/input.lite';
import DBSelect from '../../select/select.lite';
import DBSwitch from '../../switch/switch.lite';
import DBTextarea from '../../textarea/textarea.lite';
import DBPopover from '../popover.lite';
import { StorybookPopoverArgTypes } from './_popover.arg.types';

useMetadata({
	storybookTitle: 'Z-Index',
	storybookNames: [
		'Switch',
		'Switch Visual Aid',
		'Input',
		'Select',
		'Checkbox',
		'Textarea'
	],
	storybookArgTypes: StorybookPopoverArgTypes
});

export default function PopoverZIndex() {
	return (
		<Fragment>
			<DBPopover
				id="popover-zindex-switch"
				trigger={<DBButton>Switch</DBButton>}>
				<DBSwitch>Switch me</DBSwitch>
			</DBPopover>
			<DBPopover
				id="popover-zindex-switch-visual-aid"
				trigger={<DBButton>Switch Visual Aid</DBButton>}>
				<DBSwitch visualAid={true}>Switch me</DBSwitch>
			</DBPopover>
			<DBPopover
				id="popover-zindex-input"
				trigger={<DBButton>Input</DBButton>}>
				<DBInput label="Input" icon="search" />
			</DBPopover>
			<DBPopover
				id="popover-zindex-select"
				trigger={<DBButton>Select</DBButton>}>
				<DBSelect label="Select">
					<option>Option 1</option>
					<option>Option 2</option>
				</DBSelect>
			</DBPopover>
			<DBPopover
				id="popover-zindex-checkbox"
				trigger={<DBButton>Checkbox</DBButton>}>
				<DBCheckbox>Check me</DBCheckbox>
			</DBPopover>
			<DBPopover
				id="popover-zindex-textarea"
				trigger={<DBButton>Textarea</DBButton>}>
				<DBTextarea label="Textarea" />
			</DBPopover>
		</Fragment>
	);
}
