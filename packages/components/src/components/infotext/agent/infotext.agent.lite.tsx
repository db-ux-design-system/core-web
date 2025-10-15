import { DBInfotext } from '../index';

export default function Infotext() {
	return (
		<>
			<h1>DBInfotext Documentation Examples</h1>

			<h2>1. Default Infotext</h2>
			<DBInfotext>Default Infotext</DBInfotext>

			<h2>2. Semantic Variants</h2>
			<DBInfotext semantic="adaptive">Adaptive</DBInfotext>
			<DBInfotext semantic="neutral">Neutral</DBInfotext>
			<DBInfotext semantic="critical">Critical</DBInfotext>
			<DBInfotext semantic="informational">Informational</DBInfotext>
			<DBInfotext semantic="warning">Warning</DBInfotext>
			<DBInfotext semantic="successful">Successful</DBInfotext>

			<h2>3. Sizes</h2>
			<DBInfotext size="small">Small</DBInfotext>
			<DBInfotext size="medium">Medium</DBInfotext>

			<h2>4. Icon Visibility</h2>
			<DBInfotext icon="info" showIcon={false}>
				Icon Hidden
			</DBInfotext>

			<h2>5. Custom Class</h2>
			<DBInfotext className="my-custom-class">Custom Class</DBInfotext>
		</>
	);
}
