// TODO: Import @db-ui/react-components after those have been migrated
import {
	DbBrand,
	DbFooter,
	DbHeader,
	DbMainnavigation,
	DbPage,
	GithubVersionSwitcher
} from '@db-ui/react-elements';
import dynamic from 'next/dynamic';
import { getRouteWithBasePath, ROUTES } from '../data/routes';
import '@db-ui/core/dist/css/db-ui-core.vars.css';
import { useRouter } from 'next/router';
import { DbMainnavigationDataType } from '@db-ui/elements/dist/types/components/db-mainnavigation/db-mainnavigation-type';
import { useEffect, useState } from 'react';

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
	const [fullscreen, setFullscreen] = useState<boolean>(false);
	const [noH1, setNoH1] = useState<boolean>(false);
	const [properties, setProperties] = useState<boolean>(false);
	const router = useRouter();

	useEffect(() => {
		if (router.query) {
			setFullscreen(router.query.fullscreen === 'true');
			setNoH1(router.query.noh1 === 'true');
			setProperties(router.query.properties === 'true');
		}
	}, [router]);

	return (
		<StaticContent>
			{router.isReady && fullscreen && (
				<div
					className={`${noH1 ? 'noh1' : ''} ${
						properties ? 'is-properties' : ''
					}`}>
					{children}
				</div>
			)}
			{router.isReady && !fullscreen && (
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
			)}
		</StaticContent>
	);
};

export default dynamic(() => Promise.resolve(DefaultPage), {
	ssr: false
});
