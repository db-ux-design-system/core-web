import Link from 'next/link';

import { DBMainNavigation } from '../../../../output/react/src';
import {
	getRouteWithBasePath,
	type NavigationItem,
	ROUTES
} from '../../data/routes';
import NavItem from './nav-item';

const Navigation = () => (
	<DBMainNavigation>
		{ROUTES.map((route) => getRouteWithBasePath(route)).map(
			(navItem: NavigationItem) =>
				navItem.subNavigation ? (
					<NavItem
						key={`router-path-${navItem.path}`}
						navItem={navItem}
					/>
				) : (
					<Link
						key={`router-path-${navItem.path}`}
						href={navItem.path ?? ''}>
						<NavItem navItem={navItem} />
					</Link>
				)
		)}
	</DBMainNavigation>
);

export default Navigation;
