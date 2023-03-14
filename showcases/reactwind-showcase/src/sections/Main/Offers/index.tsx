import MultiCards from '../MultiCards';
import type { MultiCard } from '../MultiCards/data';

const offers: MultiCard[] = [
	{
		image: 'https://assets.static-bahn.de/.imaging/focalpoint/560x280/dam/jcr:06a1725e-c279-4288-83ad-81998a15058c/Zusatz_Anna2_01_DB17860_FFP2.jpg',
		title: 'Spar-, Flex- und Normalpreise',
		text: 'Reisen Sie günstig mit unseren Spar-, Flex- und Normalpreisen durch Deutschland oder an viele europäische Ziele. Allein, zu zweit, mit der Familie oder als Gruppe.',
		link: 'Zur Übersicht'
	},
	{
		image: 'https://assets.static-bahn.de/.imaging/focalpoint/560x280/dam/jcr:2a7ae18e-8904-4e6f-999c-87b4dc593eb2/Motiv_23_DB18660_FFP2.jpg',
		title: 'BahnCards entdecken',
		text: 'Mit der BahnCard sparen Sie bei vielen Tickets 25 Prozent oder bis zu 50 Prozent.',
		link: 'BahnCards in der Übersicht'
	}
];

const Offers = () => {
	return (
		<div className="offers-container flex flex-col">
			<h4 className="mb-res-xs">Aktuelle Angebote</h4>

			<MultiCards cards={offers} />
		</div>
	);
};

export default Offers;
