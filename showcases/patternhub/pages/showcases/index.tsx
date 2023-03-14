import type { DbMainnavigationDataType } from '@db-ui/elements/dist/types/components/db-mainnavigation/db-mainnavigation-type';
import DefaultPage from '../../components/default-page';
import { DBCard } from '../../components/src/components/card';
import { getRouteWithBasePath, ROUTES } from '../../data/routes';

const ShowcasesPage = () => (
	<DefaultPage>
		<h1>Showcases</h1>
		<div>
			{ROUTES[3].children
				?.map((route: DbMainnavigationDataType) =>
					getRouteWithBasePath(route)
				)
				.map((showcase: DbMainnavigationDataType) => (
					// TODO: We should update our Card component to provide the possibility for button or hyperlink elements within
					<a
						key={`showcase-card-${showcase.label}`}
						href={showcase.link}>
						<DBCard variant="interactive">{showcase.label}</DBCard>
					</a>
				))}
		</div>
	</DefaultPage>
);

export default ShowcasesPage;
