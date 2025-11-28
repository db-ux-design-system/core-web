import { DBBreadcrumb } from '../index';

export default function Breadcrumb() {
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
		</>
	);
}
