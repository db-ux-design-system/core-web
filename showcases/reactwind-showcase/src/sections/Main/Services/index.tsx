import type { MultiCard } from '../MultiCards/data';
import MultiCards from '../MultiCards';

const services: MultiCard[] = [
	{
		image: 'https://assets.static-bahn.de/.imaging/focalpoint/560x280/dam/jcr:9f123d0c-43ef-4e73-a2bb-1304d0fea572/242803-322799.jpg',
		title: 'Digitales Ticket',
		text: 'Kaufen Sie Ihr Bahn-Ticket online und laden Sie es direkt in die App Next DB Navigator. So haben Sie es immer dabei.',
		link: 'Mehr Erfahren'
	},
	{
		image: 'https://assets.static-bahn.de/.imaging/focalpoint/560x280/dam/jcr:805abdd7-6481-4ce4-9e46-fb512bf5d13f/Premiumbild_GettyImages-683745179.jpg',
		title: 'Komfort Check-in',
		text: 'Sparen Sie sich die Ticket-Kontrolle: Einsteigen, Sitzplatz finden und via App Next DB Navigator, ICE Portal oder Web-Browser einchecken.',
		link: 'Ihre Vorteile zum Komfort Check-in'
	},
	{
		image: 'https://assets.static-bahn.de/.imaging/focalpoint/560x280/dam/jcr:b8e6e8ee-2a8e-4fad-93e9-ea69d56d2693/03_Motiv_Mobile_1351.jpg',
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
