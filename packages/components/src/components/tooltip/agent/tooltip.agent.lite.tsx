import { DBButton } from '../../button';
import { DBTooltip } from '../index';

export default function Tooltip() {
	return (
		<>
			<h1>DBTooltip Documentation Examples</h1>

			<h2>1. Default Tooltip</h2>
			<DBButton>
				Hover on me to open Tooltip
				<DBTooltip>Tooltip</DBTooltip>
			</DBButton>

			<h2>2. Tooltip Variants</h2>
			<DBButton>
				Description Tooltip
				<DBTooltip variant="description">
					Description Tooltip Content
				</DBTooltip>
			</DBButton>
			<DBButton>
				Label Tooltip
				<DBTooltip variant="label">Label Tooltip Content</DBTooltip>
			</DBButton>

			<h2>3. Tooltip with Arrow</h2>
			<DBButton>
				Tooltip with Arrow
				<DBTooltip showArrow={true}>
					Tooltip Content with Arrow
				</DBTooltip>
			</DBButton>

			<h2>4. Placement Variants</h2>
			<DBButton>
				Top Placement
				<DBTooltip placement="top">Tooltip Content at Top</DBTooltip>
			</DBButton>
			<DBButton>
				Bottom Placement
				<DBTooltip placement="bottom">
					Tooltip Content at Bottom
				</DBTooltip>
			</DBButton>
		</>
	);
}
