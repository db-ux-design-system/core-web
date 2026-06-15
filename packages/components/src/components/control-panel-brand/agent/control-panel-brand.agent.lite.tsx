import { DBControlPanelBrand } from '../index';

export default function ControlPanelBrand() {
	return (
		<>
			<h1>DBControlPanelBrand Documentation Examples</h1>

			<h2>1. Default Control Panel Brand</h2>
			<DBControlPanelBrand/>

			<h2>2. Icon Visibility</h2>
			<DBControlPanelBrand showIcon={false}>
				Icon Hidden
			</DBControlPanelBrand>

			<h2>3. Custom Text</h2>
			<DBControlPanelBrand text="Custom Brand Text" />

			<h2>4. Custom Icon</h2>
			<DBControlPanelBrand icon="x_placeholder">
				With Custom Icon
			</DBControlPanelBrand>
		</>
	);
}
