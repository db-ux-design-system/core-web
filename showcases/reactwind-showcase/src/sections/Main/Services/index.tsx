import type { MultiCard } from '../MultiCards/data';
import MultiCards from '../MultiCards';

const services: MultiCard[] = [
	{
		image: 'images/242803-322799.webp',
		title: 'Digitales Ticket',
		text: 'Kaufen Sie Ihr Bahn-Ticket online und laden Sie es direkt in die App Next DB Navigator. So haben Sie es immer dabei.',
		link: 'Mehr Erfahren'
	},
	{
		image: 'images/Premiumbild_GettyImages-683745179.webp',
		title: 'Komfort Check-in',
		text: 'Sparen Sie sich die Ticket-Kontrolle: Einsteigen, Sitzplatz finden und via App Next DB Navigator, ICE Portal oder Web-Browser einchecken.',
		link: 'Ihre Vorteile zum Komfort Check-in'
	},
	{
		image: 'images/03_Motiv_Mobile_1351.webp',
		title: 'Services im Zug',
		text: 'So reisen Sie mit unseren Services komfortabel mit dem Zug, ob 1. Klasse, ICE Portal, DB Lounge oder Ruhebereich.',
		link: 'Zu Services im Zug'
	}
];

const Services = () => {
	return (
		<div className="services-container flex flex-col">
			<h4 className="mb-res-xs">Service-Themen für Ihre Reise</h4>
			<MultiCards cards={services} />
		</div>
	);
};

export default Services;
