import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBButton from '../../button/button.lite';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
import DBInfotext from '../../infotext/infotext.lite';
import DBDrawer from '../drawer.lite';
import { StorybookDrawerArgTypes } from './_drawer.arg.types';

useMetadata({
	storybookTitle: 'Container Size',
	storybookNames: [
		'(Default) Small',
		'Medium',
		'Large',
		'Full',
		'Small (Up)',
		'Medium (Up)',
		'Large (Up)',
		'Full (Up)'
	],
	storybookArgTypes: StorybookDrawerArgTypes,
	storybookOverwriteArgs: {
		open: false
	}
});

export default function DrawerSize() {
	return (
		<Fragment>
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Direction: Left (Horizontal)
			</DBInfotext>
			<i class="line-break" data-sb-ignore="true" />
			<div>
				<DBButton command="show-modal" commandfor="drawer-size-small">
					Open: (Default) Small
				</DBButton>
				<DBDrawer
					id="drawer-size-small"
					containerSize="small"
					direction="to-left"
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>(Default) Small</h2>
						</DBDrawerHeader>
					}>
					(Default) Small
				</DBDrawer>
			</div>
			<div>
				<DBButton command="show-modal" commandfor="drawer-size-medium">
					Open: Medium
				</DBButton>
				<DBDrawer
					id="drawer-size-medium"
					containerSize="medium"
					direction="to-left"
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Medium</h2>
						</DBDrawerHeader>
					}>
					Medium
				</DBDrawer>
			</div>
			<div>
				<DBButton command="show-modal" commandfor="drawer-size-large">
					Open: Large
				</DBButton>
				<DBDrawer
					id="drawer-size-large"
					containerSize="large"
					direction="to-left"
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Large</h2>
						</DBDrawerHeader>
					}>
					Large
				</DBDrawer>
			</div>
			<div>
				<DBButton command="show-modal" commandfor="drawer-size-full">
					Open: Full
				</DBButton>
				<DBDrawer
					id="drawer-size-full"
					containerSize="full"
					direction="to-left"
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Full</h2>
						</DBDrawerHeader>
					}>
					Full
				</DBDrawer>
			</div>
			<i class="line-break" data-sb-ignore="true" />
			<DBInfotext
				data-sb-ignore="true"
				size="small"
				semantic="informational">
				Direction: Up (Vertical)
			</DBInfotext>
			<i class="line-break" data-sb-ignore="true" />
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-size-small-up">
					Open: Small (Up)
				</DBButton>
				<DBDrawer
					id="drawer-size-small-up"
					containerSize="small"
					direction="up"
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Small (Up)</h2>
						</DBDrawerHeader>
					}>
					Small (Up)
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-size-medium-up">
					Open: Medium (Up)
				</DBButton>
				<DBDrawer
					id="drawer-size-medium-up"
					containerSize="medium"
					direction="up"
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Medium (Up)</h2>
						</DBDrawerHeader>
					}>
					Medium (Up)
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-size-large-up">
					Open: Large (Up)
				</DBButton>
				<DBDrawer
					id="drawer-size-large-up"
					containerSize="large"
					direction="up"
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Large (Up)</h2>
						</DBDrawerHeader>
					}>
					Large (Up)
				</DBDrawer>
			</div>
			<div>
				<DBButton command="show-modal" commandfor="drawer-size-full-up">
					Open: Full (Up)
				</DBButton>
				<DBDrawer
					id="drawer-size-full-up"
					containerSize="full"
					direction="up"
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Full (Up)</h2>
						</DBDrawerHeader>
					}>
					Full (Up)
				</DBDrawer>
			</div>
		</Fragment>
	);
}
