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
					data-sb-replace="Open DBDrawer by switching open property"
					onClick={() => setOpenIndex(0)}>
					Open: (Default) Small
				</DBButton>
				<DBDrawer
					containerSize="small"
					direction="to-left"
					open={openIndex === 0}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							(Default) Small
						</DBDrawerHeader>
					}>
					(Default) Small
				</DBDrawer>
			</div>
			<div>
				<DBButton
					data-sb-replace="Open DBDrawer by switching open property"
					onClick={() => setOpenIndex(1)}>
					Open: Medium
				</DBButton>
				<DBDrawer
					containerSize="medium"
					direction="to-left"
					open={openIndex === 1}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							Medium
						</DBDrawerHeader>
					}>
					Medium
				</DBDrawer>
			</div>
			<div>
				<DBButton
					data-sb-replace="Open DBDrawer by switching open property"
					onClick={() => setOpenIndex(2)}>
					Open: Large
				</DBButton>
				<DBDrawer
					containerSize="large"
					direction="to-left"
					open={openIndex === 2}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							Large
						</DBDrawerHeader>
					}>
					Large
				</DBDrawer>
			</div>
			<div>
				<DBButton
					data-sb-replace="Open DBDrawer by switching open property"
					onClick={() => setOpenIndex(3)}>
					Open: Full
				</DBButton>
				<DBDrawer
					containerSize="full"
					direction="to-left"
					open={openIndex === 3}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							Full
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
					data-sb-replace="Open DBDrawer by switching open property"
					onClick={() => setOpenIndex(4)}>
					Open: Small (Up)
				</DBButton>
				<DBDrawer
					containerSize="small"
					direction="up"
					open={openIndex === 4}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							Small (Up)
						</DBDrawerHeader>
					}>
					Small (Up)
				</DBDrawer>
			</div>
			<div>
				<DBButton
					data-sb-replace="Open DBDrawer by switching open property"
					onClick={() => setOpenIndex(5)}>
					Open: Medium (Up)
				</DBButton>
				<DBDrawer
					containerSize="medium"
					direction="up"
					open={openIndex === 5}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							Medium (Up)
						</DBDrawerHeader>
					}>
					Medium (Up)
				</DBDrawer>
			</div>
			<div>
				<DBButton
					data-sb-replace="Open DBDrawer by switching open property"
					onClick={() => setOpenIndex(6)}>
					Open: Large (Up)
				</DBButton>
				<DBDrawer
					containerSize="large"
					direction="up"
					open={openIndex === 6}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							Large (Up)
						</DBDrawerHeader>
					}>
					Large (Up)
				</DBDrawer>
			</div>
			<div>
				<DBButton
					data-sb-replace="Open DBDrawer by switching open property"
					onClick={() => setOpenIndex(7)}>
					Open: Full (Up)
				</DBButton>
				<DBDrawer
					containerSize="full"
					direction="up"
					open={openIndex === 7}
					onClose={() => setOpenIndex(-1)}
					header={
						<DBDrawerHeader closeButtonText="Close">
							Full (Up)
						</DBDrawerHeader>
					}>
					Full (Up)
				</DBDrawer>
			</div>
		</Fragment>
	);
}
