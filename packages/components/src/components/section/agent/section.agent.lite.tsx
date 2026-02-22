import { DBSection } from '../index';

export default function Section() {
	return (
		<>
			<h1>DBSection Documentation Examples</h1>

			<h2>1. Default Section</h2>
			<DBSection>Default Section</DBSection>

			<h2>2. Spacing Variants</h2>
			<DBSection spacing="medium">Medium Spacing</DBSection>
			<DBSection spacing="small">Small Spacing</DBSection>
			<DBSection spacing="large">Large Spacing</DBSection>
			<DBSection spacing="none">No Spacing</DBSection>

			<h2>3. Container Width</h2>
			<DBSection width="full">Full Width</DBSection>
			<DBSection width="medium">Medium Width</DBSection>
			<DBSection width="large">Large Width</DBSection>
			<DBSection width="small">Small Width</DBSection>

			<h2>4. Custom Class</h2>
			<DBSection className="my-custom-class">Custom Class</DBSection>
		</>
	);
}
