import { DBBreadcrumb } from '../../breadcrumb/index';
import { DBBreadcrumbItem } from '../index';

export default function BreadcrumbItem() {
	return (
		<>
			<h1>DBBreadcrumbItem Documentation Examples</h1>

			<h2>1. Basic Breadcrumb with Items</h2>
			<DBBreadcrumb>
				<DBBreadcrumbItem href="/">Home</DBBreadcrumbItem>
				<DBBreadcrumbItem href="/category">Category</DBBreadcrumbItem>
				<DBBreadcrumbItem ariaCurrent="page">
					Current Page
				</DBBreadcrumbItem>
			</DBBreadcrumb>

			<h2>2. With Text Prop</h2>
			<DBBreadcrumb>
				<DBBreadcrumbItem href="/" text="Home" />
				<DBBreadcrumbItem href="/products" text="Products" />
				<DBBreadcrumbItem text="Details" ariaCurrent="page" />
			</DBBreadcrumb>

			<h2>3. Disabled Item</h2>
			<DBBreadcrumb>
				<DBBreadcrumbItem href="/">Home</DBBreadcrumbItem>
				<DBBreadcrumbItem disabled>Disabled Item</DBBreadcrumbItem>
				<DBBreadcrumbItem ariaCurrent="page">Current</DBBreadcrumbItem>
			</DBBreadcrumb>

			<h2>4. Different Sizes</h2>
			<DBBreadcrumb size="small">
				<DBBreadcrumbItem href="/">Home</DBBreadcrumbItem>
				<DBBreadcrumbItem href="/category">Category</DBBreadcrumbItem>
				<DBBreadcrumbItem ariaCurrent="page">
					Current (Small)
				</DBBreadcrumbItem>
			</DBBreadcrumb>

			<DBBreadcrumb size="medium">
				<DBBreadcrumbItem href="/">Home</DBBreadcrumbItem>
				<DBBreadcrumbItem href="/category">Category</DBBreadcrumbItem>
				<DBBreadcrumbItem ariaCurrent="page">
					Current (Medium)
				</DBBreadcrumbItem>
			</DBBreadcrumb>

			<h2>5. Different Separators</h2>
			<DBBreadcrumb separator="chevron">
				<DBBreadcrumbItem href="/">Home</DBBreadcrumbItem>
				<DBBreadcrumbItem href="/category">Category</DBBreadcrumbItem>
				<DBBreadcrumbItem ariaCurrent="page">Chevron</DBBreadcrumbItem>
			</DBBreadcrumb>

			<DBBreadcrumb separator="slash">
				<DBBreadcrumbItem href="/">Home</DBBreadcrumbItem>
				<DBBreadcrumbItem href="/category">Category</DBBreadcrumbItem>
				<DBBreadcrumbItem ariaCurrent="page">Slash</DBBreadcrumbItem>
			</DBBreadcrumb>

			<h2>6. Custom Class</h2>
			<DBBreadcrumb>
				<DBBreadcrumbItem href="/" className="custom-breadcrumb-item">
					Home with Custom Class
				</DBBreadcrumbItem>
				<DBBreadcrumbItem ariaCurrent="page">Current</DBBreadcrumbItem>
			</DBBreadcrumb>
		</>
	);
}
