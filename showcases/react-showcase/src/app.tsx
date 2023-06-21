import type { ChangeEvent } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
	DBBrand,
	DBHeader,
	DBMainNavigation,
	DBPage
} from '../../../output/react/src';
import {
	COLORS,
	TONALITIES
} from '../../../packages/components/src/shared/constants';
import {
	getSortedNavigationItems,
	NAVIGATION_ITEMS,
	type NavigationItem
} from './utils/navigation-item';
import useQuery from './hooks/use-query';
import NavItem from './nav-item';

const App = () => {
	const [tonality, setTonality, color, setColor, pageName, fullscreen] =
		useQuery();

	if (pageName || fullscreen) {
		return (
			<div className={`db-ui-${tonality} db-bg-${color}`}>
				<Outlet />
			</div>
		);
	}

	return (
		<DBPage
			type="fixedHeaderFooter"
			slotHeader={
				<DBHeader
					slotBrand={
						<DBBrand title="React Showcase" anchorChildren>
							Showcase
						</DBBrand>
					}
					slotDesktopNavigation={
						<DBMainNavigation>
							{getSortedNavigationItems(NAVIGATION_ITEMS).map(
								(navItem: NavigationItem) =>
									navItem.component ? (
										<Link
											key={`router-path-${navItem.path}`}
											to={navItem.path}>
											<NavItem
												navItem={navItem}></NavItem>
										</Link>
									) : (
										<NavItem
											key={`router-path-${navItem.path}`}
											navItem={navItem}></NavItem>
									)
							)}
						</DBMainNavigation>
					}
					slotMetaNavigation={
						<div>
							<select
								value={tonality}
								onChange={(
									event: ChangeEvent<HTMLSelectElement>
								) => {
									setTonality(event?.target?.value);
								}}>
								{TONALITIES.map((ton) => (
									<option
										key={`tonality-option-${ton}`}
										value={ton}>
										{ton}
									</option>
								))}
							</select>
							<select
								value={color}
								onChange={(
									event: ChangeEvent<HTMLSelectElement>
								) => {
									setColor(event?.target?.value);
								}}>
								{COLORS.map((col) => (
									<option
										key={`tonality-option-${col}`}
										value={col}>
										{col}
									</option>
								))}
							</select>
						</div>
					}
				/>
			}>
			<div className={`db-ui-${tonality} db-bg-${color}`}>
				<Outlet />
			</div>
		</DBPage>
	);
};

export default App;
