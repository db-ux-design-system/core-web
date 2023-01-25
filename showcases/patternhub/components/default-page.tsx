// TODO: Import @db-ui/react-components after those have been migrated
import {
	DbBrand,
	DbFooter,
	DbHeader,
	DbMainnavigation,
	DbPage,
	GithubVersionSwitcher
} from '@db-ui/react-elements';
import StaticContent from './static-content';
import { getRouteWithBasePath, ROUTES } from '../data/routes';
import '@db-ui/core/dist/css/db-ui-core.vars.css';
import { useRouter } from 'next/router';
import { DbMainnavigationDataType } from '@db-ui/elements/dist/types/components/db-mainnavigation/db-mainnavigation-type';

const getRoutesWithCurrent = (
	routes: DbMainnavigationDataType[],
	pathname: string
): DbMainnavigationDataType[] => {
	if (!routes) {
		return [];
	}

	return routes
		.map((route) => ({
			...route,
			current:
				(route.link === '/' && pathname === '/') ||
				(route.link !== '/' && pathname.includes(route.link)),
			children: route.children
				? getRoutesWithCurrent(route.children, pathname)
				: []
		}))
		.map((route) => getRouteWithBasePath(route));
};

const DefaultPage = ({ children }: any) => {
	const router = useRouter();
	return (
		<StaticContent>
			<DbPage>
				<DbHeader slot="header">
					{/* TODO: provide correct https://db-ui.github.io/mono/* path later on in here */}
					<DbBrand src="https://db-ui.github.io/images/db_logo.svg">
						{process.env.NEXT_PUBLIC_APP_NAME}
					</DbBrand>
					<DbMainnavigation
						data={JSON.stringify(
							getRoutesWithCurrent(ROUTES, router.pathname)
						)}
					/>
					{process.env.NEXT_PUBLIC_GITHUB_VERSION_SWITCHER ===
						'true' && (
						<GithubVersionSwitcher
							owner={process.env.NEXT_PUBLIC_GITHUB_OWNER}
							repo={process.env.NEXT_PUBLIC_GITHUB_REPO}
						/>
					)}
				</DbHeader>
				<div>{children}</div>

				<DbFooter slot="footer" copyright />
			</DbPage>
		</StaticContent>
	);
};

export default DefaultPage;
