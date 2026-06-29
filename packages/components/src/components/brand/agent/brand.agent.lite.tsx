import { DBBrand } from '../index';

export default function Brand() {
	return (
		<>
			<h1>DBBrand Documentation Examples</h1>

			<h2>1. Default Brand</h2>
			<DBBrand>Default Brand</DBBrand>

			<h2>2. Icon Visibility</h2>
			<DBBrand showIcon={false}>Icon Hidden</DBBrand>

			<h2>3. Custom Text</h2>
			<DBBrand text="Custom Brand Text">With Custom Text</DBBrand>
		</>
	);
}
