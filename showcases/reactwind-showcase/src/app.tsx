import {
	DBIcon,
	DBCard,
	DBButton,
	DBDivider
} from '../../../packages/components/output/react/src';

const links = ['Startseite', 'Hilfe & Kontakt', 'Verkehrsmeldungen'];
const menu = ['Tickets & Angebote', 'Info & Services', 'Meine Reisen'];
const footer = [
	'Impressum',
	'Beförderungsbedingungen',
	'Datenschutz',
	'Nutzungsbedingungen',
	'Vertrag kündigen',
	'© DB Vertrieb GmbH'
];
const offers = [
	{
		image: 'images/Zusatz_Anna2_01_DB17860_FFP2.webp',
		title: 'Spar-, Flex- und Normalpreise',
		text: 'Reisen Sie günstig mit unseren Spar-, Flex- und Normalpreisen durch Deutschland oder an viele europäische Ziele. Allein, zu zweit, mit der Familie oder als Gruppe.',
		link: 'Zur Übersicht'
	},
	{
		image: 'images/Motiv_23_DB18660_FFP2.webp',
		title: 'BahnCards entdecken',
		text: 'Mit der BahnCard sparen Sie bei vielen Tickets 25 Prozent oder bis zu 50 Prozent.',
		link: 'BahnCards in der Übersicht'
	},
	{
		image: 'images/pendlerin.webp',
		title: 'Regionale Angebote',
		text: 'Reisen Sie mit unseren Länder-Tickets oder weiteren regionalen Tickets günstig im Nahverkehr durch Deutschland.',
		link: 'BahnCards in der Übersicht'
	}
];

function App() {
	return (
		<div className="root flex flex-col db-bg-neutral-1 gap-res-md">
			{/* Header section */}
			<div className="header shadow-8 md:mx-res-lg">
				<div
					className="small-header flex db-ui-functional
			db-bg-neutral-2 py-fix-sm px-res-md justify-center md:justify-end gap-fix-md">
					{links.map((link, index) => (
						<a href="#" key={`small-header-item-${index}`}>
							<small>{link}</small>
						</a>
					))}
				</div>

				<div className="navigation flex flex-wrap db-bg-neutral-0 p-fix-xl gap-fix-lg">
					<i>DB-BRAND</i>
					<div className="flex gap-fix-xl">
						{menu.map((mItem, index) => (
							<strong key={`nav-item-${index}`}>{mItem}</strong>
						))}
					</div>
					<div className="ml-auto flex gap-fix-md">
						<DBIcon icon="search" />
						<DBDivider variant="vertical" />
						<DBIcon icon="account" />
						<strong>Login</strong>
					</div>
				</div>
			</div>

			{/* Search section */}

			<div className="search mx-res-xs md:mx-res-xl">
				<DBCard>
					<div
						className="db-ui-expressive flex flex-col md:flex-row gap-res-xs md:gap-res-md
					p-fix-sm justify-around items-center">
						<i>Input From</i>
						<DBButton
							icon="swap-horizontal"
							onlyIcon
							variant="ghost">
							Von Nach tauschen
						</DBButton>
						<i>Input To</i>
						<DBButton>Suchen</DBButton>
					</div>
				</DBCard>
			</div>

			{/* Main */}

			<main className="flex flex-col gap-res-md px-res-xs md:px-res-md">
				{/* Welcome */}
				<DBCard variant="ia">
					<div className="welcome-container grid grid-cols-1 md:grid-cols-2 p-res-md gap-res-lg">
						<div className="">
							<img src="images/Headerbild_erweitert_1280x440.webp" />
						</div>
						<div className="flex flex-col gap-fix-md">
							<h3>Willkommen bei Next DB</h3>
							<div>
								<p>
									Die Webseite<strong> next.bahn.de </strong>
									und<strong> </strong>die App
									<strong>
										{' '}
										Next DB Navigator
									</strong> sind{' '}
									<strong>
										ab sofort parallel zu bahn.de und dem DB
										Navigator verfügbar
									</strong>
									.&nbsp;In den kommenden Monaten bauen wir
									die Funktionen, Angebote und Service-Inhalte
									stetig für Sie aus.&nbsp;
								</p>

								<p>
									Erleben Sie modernes Design sowie eine
									optimierte Benutzerführung und entdecken Sie
									Highlights und neue Funktionen.
								</p>

								<p>
									Viel Spaß beim Testen! Wir freuen uns auf
									Ihr Feedback.
								</p>
							</div>
							<DBIcon withText icon="chevron-right">
								Mehr erfahren
							</DBIcon>
						</div>
					</div>
				</DBCard>

				{/* Offers */}
				<DBCard>
					<div className="offers-container flex flex-col p-fix-md">
						<h4 className="mb-fix-md">Akutelle Angebote</h4>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-res-md">
							{offers.map((offer) => (
								<DBCard variant="ia">
									<div className="flex flex-col gap-fix-md h-full">
										<img src={offer.image} />
										<h5>{offer.title}</h5>
										<p>{offer.text}</p>
										<div className="mt-auto">
											<DBIcon
												withText
												icon="chevron-right">
												{offer.link}
											</DBIcon>
										</div>
									</div>
								</DBCard>
							))}
						</div>
					</div>
				</DBCard>
			</main>

			{/* Footer */}

			<div className="db-ui-functional db-bg-neutral-6 flex flex-col p-res-md gap-fix-md">
				<DBDivider />
				<div className="flex flex-wrap gap-res-sm justify-center">
					{footer.map((fItem, index) => (
						<a key={`footer-item-${index}`} href="#">
							{fItem}
						</a>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
