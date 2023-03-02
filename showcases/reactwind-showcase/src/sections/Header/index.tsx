import { DBButton, DBDivider, DBBrand } from '../../../../../output/react/src';

const links = ['Startseite', 'Hilfe & Kontakt', 'Verkehrsmeldungen'];
const menu = ['Tickets & Angebote', 'Info & Services', 'Meine Reisen'];

const Header = () => (
	<div className="header shadow-8">
		<div
			className="small-header hidden md:flex db-ui-functional
			db-bg-neutral-2 py-fix-md px-fix-xl justify-center md:justify-end gap-fix-xl">
			{links.map((link, index) => (
				<a href="#" key={`small-header-item-${index}`}>
					<small>{link}</small>
				</a>
			))}
		</div>

		<div className="navigation flex flex-wrap db-bg-neutral-0 p-fix-md gap-fix-xl md:rounded-b-lg">
			<DBBrand imgSrc="db_logo.svg"></DBBrand>
			<div className="hidden md:flex gap-fix-xl items-center">
				{menu.map((mItem, index) => (
					<strong key={`nav-item-${index}`}>{mItem}</strong>
				))}
			</div>
			<div className="ml-auto flex">
				<DBButton icon="search" variant="transparent" />
				<DBDivider variant="vertical" />
				<DBButton
					icntxt
					className="hidden md:flex"
					icon="account"
					variant="transparent">
					Login
				</DBButton>
				<DBButton
					className="flex md:hidden"
					icon="menu"
					variant="transparent"
				/>
			</div>
		</div>
	</div>
);

export default Header;
