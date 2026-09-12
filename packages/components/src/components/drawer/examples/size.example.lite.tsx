import { Fragment, useMetadata, useState } from '@builder.io/mitosis';
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
	const [openIndex, setOpenIndex] = useState<number>(-1);

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
				<DBButton
					command="show-modal"
					commandfor="drawer-size-small"
					onClick={() => setOpenIndex(0)}>
					Open: (Default) Small
				</DBButton>
				<DBDrawer
					id="drawer-size-small"
					containerSize="small"
					direction="to-left"
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>(Default) Small</h2>
						</DBDrawerHeader>
					}>
					(Default) Small
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-size-medium"
					onClick={() => setOpenIndex(1)}>
					Open: Medium
				</DBButton>
				<DBDrawer
					id="drawer-size-medium"
					containerSize="medium"
					direction="to-left"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Medium</h2>
						</DBDrawerHeader>
					}>
					Medium
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-size-large"
					onClick={() => setOpenIndex(2)}>
					Open: Large
				</DBButton>
				<DBDrawer
					id="drawer-size-large"
					containerSize="large"
					direction="to-left"
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Large</h2>
						</DBDrawerHeader>
					}>
					Large
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-size-full"
					onClick={() => setOpenIndex(3)}>
					Open: Full
				</DBButton>
				<DBDrawer
					id="drawer-size-full"
					containerSize="full"
					direction="to-left"
					open={openIndex === 3}
					onClose={() => setOpenIndex(-1)}
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
					commandfor="drawer-size-small-up"
					onClick={() => setOpenIndex(4)}>
					Open: Small (Up)
				</DBButton>
				<DBDrawer
					id="drawer-size-small-up"
					containerSize="small"
					direction="up"
					open={openIndex === 4}
					onClose={() => setOpenIndex(-1)}
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
					commandfor="drawer-size-medium-up"
					onClick={() => setOpenIndex(5)}>
					Open: Medium (Up)
				</DBButton>
				<DBDrawer
					id="drawer-size-medium-up"
					containerSize="medium"
					direction="up"
					open={openIndex === 5}
					onClose={() => setOpenIndex(-1)}
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
					commandfor="drawer-size-large-up"
					onClick={() => setOpenIndex(6)}>
					Open: Large (Up)
				</DBButton>
				<DBDrawer
					id="drawer-size-large-up"
					containerSize="large"
					direction="up"
					open={openIndex === 6}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							<h2>Large (Up)</h2>
						</DBDrawerHeader>
					}>
					Large (Up)
				</DBDrawer>
			</div>
			<div>
				<DBButton
					command="show-modal"
					commandfor="drawer-size-full-up"
					onClick={() => setOpenIndex(7)}>
					Open: Full (Up)
				</DBButton>
				<DBDrawer
					id="drawer-size-full-up"
					containerSize="full"
					direction="up"
					open={openIndex === 7}
					onClose={() => setOpenIndex(-1)}
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
