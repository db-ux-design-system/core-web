import {
	DBCard,
	DBIcon
} from '../../../../../packages/components/output/react/src';

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

const Main = () => (
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
							<strong> Next DB Navigator</strong> sind{' '}
							<strong>
								ab sofort parallel zu bahn.de und dem DB
								Navigator verfügbar
							</strong>
							.&nbsp;In den kommenden Monaten bauen wir die
							Funktionen, Angebote und Service-Inhalte stetig für
							Sie aus.&nbsp;
						</p>

						<p>
							Erleben Sie modernes Design sowie eine optimierte
							Benutzerführung und entdecken Sie Highlights und
							neue Funktionen.
						</p>

						<p>
							Viel Spaß beim Testen! Wir freuen uns auf Ihr
							Feedback.
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
									<DBIcon withText icon="chevron-right">
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
);

export default Main;
