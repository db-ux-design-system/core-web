import { DBCard } from '../index';

export default function Card() {
	return (
		<>
			<h1>DBCard Documentation Examples</h1>

			<h2>1. Default Card</h2>
			<DBCard>Default Card</DBCard>

			<h2>2. Behaviors</h2>
			<DBCard behavior="static">Static</DBCard>
			<DBCard behavior="interactive">Interactive</DBCard>

			<h2>3. Elevation Levels</h2>
			<DBCard elevationLevel="1">Elevation Level 1</DBCard>
			<DBCard elevationLevel="2">Elevation Level 2</DBCard>
			<DBCard elevationLevel="3">Elevation Level 3</DBCard>

			<h2>4. Custom Class</h2>
			<DBCard className="my-custom-class">Custom Class</DBCard>

			<h2>5. Spacing</h2>
			<DBCard spacing="medium">Medium Spacing</DBCard>
			<DBCard spacing="small">Small Spacing</DBCard>
			<DBCard spacing="large">Large Spacing</DBCard>
			<DBCard spacing="none">No Spacing</DBCard>
		</>
	);
}
