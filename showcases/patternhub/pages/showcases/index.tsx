import type { DbMainnavigationDataType } from '@db-ui/elements/dist/types/components/db-mainnavigation/db-mainnavigation-type';
import DefaultPage from '../../components/default-page';
import { DBCard } from '../../components/src/components/card';
import { ROUTES } from '../../data/routes';

const ShowcasesPage = () => {
	const getLink = (link: string) => {
		return process.env.NODE_ENV === 'development' ? link : `${link}.html`;
	};

	return (
		<DefaultPage>
			<h1>Showcases</h1>
			<div>
				{ROUTES[3].children?.map(
					(showcase: DbMainnavigationDataType) => (
						<a
							key={`showcase-card-${showcase.label}`}
							href={getLink(showcase.link)}>
							<DBCard variant="ia">{showcase.label}</DBCard>
						</a>
					)
				)}
			</div>
		</DefaultPage>
	);
};

export default ShowcasesPage;
