import {
	DBButton,
	DBDivider
} from '../../../../../packages/components/output/react/src';

const links = ['Startseite', 'Hilfe & Kontakt', 'Verkehrsmeldungen'];
const menu = ['Tickets & Angebote', 'Info & Services', 'Meine Reisen'];

const Header = () => (
	<div className="header shadow-8 border-b-lg">
		<div
			className="small-header flex db-ui-functional
			db-bg-neutral-2 py-fix-md px-fix-xl justify-center md:justify-end gap-fix-xl">
			{links.map((link, index) => (
				<a href="#" key={`small-header-item-${index}`}>
					<small>{link}</small>
				</a>
			))}
		</div>

		<div className="navigation flex flex-wrap db-bg-neutral-0 py-fix-md px-fix-xl gap-fix-xl">
			<img src="db_logo.svg" width="66" height="46" alt="" />
			<div className="flex gap-fix-xl items-center">
				{menu.map((mItem, index) => (
					<strong key={`nav-item-${index}`}>{mItem}</strong>
				))}
			</div>
			<div className="ml-auto flex">
				<DBButton icon="search" onlyIcon variant="ghost" />
				<DBDivider variant="vertical" />
				<DBButton icon="account" variant="ghost">
					Login
				</DBButton>
			</div>
		</div>
	</div>
);

export default Header;
