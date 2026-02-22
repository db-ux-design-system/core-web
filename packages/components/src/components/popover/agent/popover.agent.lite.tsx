import { DBButton } from '../../button/index';
import { DBPopover } from '../index';

export default function Popover() {
	return (
		<>
			<h1>DBPopover Documentation Examples</h1>

			<h2>1. Default Popover</h2>
			<DBPopover
				trigger={<DBButton>Hover on me to open Popover</DBButton>}>
				Use any HTML code here like e.g. a <code>button</code>:
				<button type="button">Test</button>
			</DBPopover>

			<h2>2. Placement Variants</h2>
			<DBPopover
				trigger={<DBButton>Top Placement</DBButton>}
				placement="top">
				Popover with top placement
			</DBPopover>
			<DBPopover
				trigger={<DBButton>Bottom Placement</DBButton>}
				placement="bottom">
				Popover with bottom placement
			</DBPopover>

			<h2>3. Delay Variants</h2>
			<DBPopover trigger={<DBButton>Fast Delay</DBButton>} delay="fast">
				Popover with fast delay
			</DBPopover>
			<DBPopover trigger={<DBButton>Slow Delay</DBButton>} delay="slow">
				Popover with slow delay
			</DBPopover>

			<h2>4. Animation</h2>
			<DBPopover
				trigger={<DBButton>With Animation</DBButton>}
				animation={true}>
				Popover with animation
			</DBPopover>
			<DBPopover
				trigger={<DBButton>No Animation</DBButton>}
				animation={false}>
				Popover without animation
			</DBPopover>

			<h2>5. Width Variants</h2>
			<DBPopover trigger={<DBButton>Auto Width</DBButton>} width="auto">
				Popover with auto width
			</DBPopover>
			<DBPopover trigger={<DBButton>Fixed Width</DBButton>} width="fixed">
				Popover with fixed width
			</DBPopover>
		</>
	);
}
