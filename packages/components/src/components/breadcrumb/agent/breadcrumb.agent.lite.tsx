import { DBBreadcrumbItem } from '../../breadcrumb-item/index';
import { DBBreadcrumb } from '../index';

export default function Breadcrumb() {
	const items = [
		{ href: '/', text: 'Startseite' },
		{ href: '/reiseauskunft', text: 'Reiseauskunft' },
		{
			href: '/reiseauskunft/verbindung',
			text: 'Verbindung Berlin - Hamburg'
		},
		{ text: 'Fahrtdetails', ariaCurrent: 'page' as const }
	];

	const collapsedItems = [
		{ href: '/', text: 'Startseite' },
		{ href: '/buchung', text: 'Buchung' },
		{ href: '/buchung/fahrkarten', text: 'Fahrkarten' },
		{ href: '/buchung/fahrkarten/sparpreis', text: 'Super Sparpreis' },
		{ text: 'Sitzplatzreservierung', ariaCurrent: 'page' as const }
	];

	return (
		<>
			<h1>DBBreadcrumb Documentation Examples</h1>

			<h2>1. Using Child Components</h2>
			<DBBreadcrumb>
				<DBBreadcrumbItem href="/">Startseite</DBBreadcrumbItem>
				<DBBreadcrumbItem href="/service">
					Service & Hilfe
				</DBBreadcrumbItem>
				<DBBreadcrumbItem ariaCurrent="page">
					Kontaktformular
				</DBBreadcrumbItem>
			</DBBreadcrumb>

			<h2>2. Using Items Prop (Recommended)</h2>
			<DBBreadcrumb items={items} ariaLabel="Breadcrumb" />

			<h2>3. Size and Separator</h2>
			<DBBreadcrumb items={items} size="medium" separator="slash" />

			<h2>4. Items Prop with Collapse</h2>
			<DBBreadcrumb
				items={collapsedItems}
				maxItems={3}
				ellipsisAriaLabel="Expand to show all breadcrumb items"
			/>
		</>
	);
}
