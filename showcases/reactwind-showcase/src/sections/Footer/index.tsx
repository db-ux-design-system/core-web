const footer = [
	'Impressum',
	'Beförderungsbedingungen',
	'Datenschutz',
	'Nutzungsbedingungen',
	'Vertrag kündigen',
	'© DB Vertrieb GmbH'
];

const Footer = () => (
	<div className="db-ui-functional db-bg-neutral-6 flex flex-col p-fix-xl">
		<div className="flex flex-wrap gap-fix-xl justify-center">
			{footer.map((fItem, index) => (
				<a key={`footer-item-${index}`} href="#">
					{fItem}
				</a>
			))}
		</div>
	</div>
);
export default Footer;
