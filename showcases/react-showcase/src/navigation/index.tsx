// SPDX-FileCopyrightText: 2025 DB Systel GmbH
//
// SPDX-License-Identifier: Apache-2.0

import {
	getSortedNavigationItems,
	NAVIGATION_ITEMS,
	type NavigationItem
} from '../utils/navigation-item';
import { DBNavigation } from '../../../../output/react/src';
import NavItem from './nav-item';

const Navigation = () => (
	<DBNavigation aria-label="main navigation">
		{getSortedNavigationItems(NAVIGATION_ITEMS).map(
			(navItem: NavigationItem) => (
				<NavItem
					key={`router-path-${navItem.path}`}
					navItem={navItem}
				/>
			)
		)}
	</DBNavigation>
);

export default Navigation;
