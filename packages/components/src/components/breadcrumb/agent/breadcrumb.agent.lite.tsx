import { DBBreadcrumb } from '../index';

export default function Breadcrumb() {
	const items = [
		{ href: '#', text: 'Home' },
		{ href: '#', text: 'Category' },
		{ href: '#', text: 'Subcategory' },
		{ text: 'Current Page', ariaCurrent: 'page' as const }
	];

	return (
		<>
			<h1>DBBreadcrumb Documentation Examples</h1>

			<h2>1. Default Breadcrumb</h2>
			<DBBreadcrumb>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">Category</a>
				</li>
				<li aria-current="page">Current Page</li>
			</DBBreadcrumb>

			<h2>2. Long Breadcrumb Path</h2>
			<DBBreadcrumb>
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">Category</a>
				</li>
				<li>
					<a href="#">Subcategory</a>
				</li>
				<li>
					<a href="#">Product Group</a>
				</li>
				<li aria-current="page">Current Product</li>
			</DBBreadcrumb>

			<h2>3. Single Item</h2>
			<DBBreadcrumb>
				<li aria-current="page">Current Page</li>
			</DBBreadcrumb>

			<h2>4. Items prop with collapse</h2>
			<DBBreadcrumb items={items} maxItems={3} />
		</>
	);
}
