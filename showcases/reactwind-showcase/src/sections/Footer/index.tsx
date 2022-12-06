import { DBDivider } from '../../../../../packages/components/output/react/src';

const footer = [
	'Impressum',
	'Beförderungsbedingungen',
	'Datenschutz',
	'Nutzungsbedingungen',
	'Vertrag kündigen',
	'© DB Vertrieb GmbH'
];

const Footer = () => (
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
);
export default Footer;
