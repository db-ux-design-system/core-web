import { DBBadge } from '../index';

export default function Badge() {
	return (
		<>
			<h1>DBBadge Documentation Examples</h1>

			<h2>1. Default Badge</h2>
			<DBBadge>Default Badge</DBBadge>

			<h2>2. Semantic Variants</h2>
			<DBBadge semantic="adaptive">Adaptive</DBBadge>
			<DBBadge semantic="neutral">Neutral</DBBadge>
			<DBBadge semantic="critical">Critical</DBBadge>
			<DBBadge semantic="informational">Informational</DBBadge>
			<DBBadge semantic="warning">Warning</DBBadge>
			<DBBadge semantic="successful">Successful</DBBadge>

			<h2>3. Sizes</h2>
			<DBBadge size="small">Small</DBBadge>
			<DBBadge size="medium">Medium</DBBadge>

			<h2>4. Emphasis Variants</h2>
			<DBBadge emphasis="weak">Weak Emphasis</DBBadge>
			<DBBadge emphasis="strong">Strong Emphasis</DBBadge>

			<h2>5. Placement Variants</h2>
			<DBBadge placement="inline">Inline</DBBadge>
			<DBBadge placement="corner-top-left">Corner Top Left</DBBadge>
			<DBBadge placement="corner-top-right">Corner Top Right</DBBadge>
			<DBBadge placement="corner-center-left">Corner Center Left</DBBadge>
			<DBBadge placement="corner-center-right">
				Corner Center Right
			</DBBadge>
			<DBBadge placement="corner-bottom-left">Corner Bottom Left</DBBadge>
			<DBBadge placement="corner-bottom-right">
				Corner Bottom Right
			</DBBadge>

			<h2>6. Custom Label</h2>
			<DBBadge label="Custom Label">With Custom Label</DBBadge>
		</>
	);
}
