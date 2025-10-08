import { DBStack } from '../index';

export default function Stack() {
	return (
		<>
			<h1>DBStack Documentation Examples</h1>

			<h2>1. Default Stack</h2>
			<DBStack>Default Stack</DBStack>

			<h2>2. Variants</h2>
			<DBStack variant="simple">Simple Variant</DBStack>
			<DBStack variant="divider">Divider Variant</DBStack>

			<h2>3. Directions</h2>
			<DBStack direction="row">Row Direction</DBStack>
			<DBStack direction="column">Column Direction</DBStack>

			<h2>4. Alignment</h2>
			<DBStack alignment="stretch">Stretch Alignment</DBStack>
			<DBStack alignment="start">Start Alignment</DBStack>
			<DBStack alignment="end">End Alignment</DBStack>
			<DBStack alignment="center">Center Alignment</DBStack>

			<h2>5. Justify Content</h2>
			<DBStack justifyContent="space-between">Space Between</DBStack>
			<DBStack justifyContent="start">Start Justify</DBStack>
			<DBStack justifyContent="end">End Justify</DBStack>
			<DBStack justifyContent="center">Center Justify</DBStack>

			<h2>6. Gap Spacing</h2>
			<DBStack gap="medium">Medium Gap</DBStack>
			<DBStack gap="small">Small Gap</DBStack>
			<DBStack gap="large">Large Gap</DBStack>
			<DBStack gap="none">No Gap</DBStack>

			<h2>7. Wrap</h2>
			<DBStack wrap>Wrap Enabled</DBStack>
			<DBStack wrap={false}>Wrap Disabled</DBStack>

			<h2>8. Custom Class</h2>
			<DBStack className="my-custom-class">Custom Class</DBStack>
		</>
	);
}
