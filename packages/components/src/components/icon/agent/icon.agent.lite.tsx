import { DBIcon } from '../index';

export default function Icon() {
	return (
		<>
			<h1>DBIcon Documentation Examples</h1>

			<h2>1. Default Icon</h2>
			<DBIcon>Default Icon</DBIcon>

			<h2>2. Icon Variants</h2>
			<DBIcon icon="user">User Icon</DBIcon>
			<DBIcon icon="settings">Settings Icon</DBIcon>

			<h2>3. Icon Weights</h2>
			<DBIcon weight="16">16px Icon</DBIcon>
			<DBIcon weight="24">24px Icon</DBIcon>
			<DBIcon weight="32">32px Icon</DBIcon>

			<h2>4. Custom Class</h2>
			<DBIcon className="my-custom-class">Custom Class Icon</DBIcon>

			<h2>5. Text Content</h2>
			<DBIcon text="Icon with Text">Icon with Text</DBIcon>
		</>
	);
}
