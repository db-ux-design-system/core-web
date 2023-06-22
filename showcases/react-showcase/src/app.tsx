import { useState, typeChangeEvent } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { DBBrand, DBButton, DBHeader, DBPage } from '../../../output/react/src';
import {
	COLORS,
	TONALITIES
} from '../../../packages/components/src/shared/constants';
import { getSortedNavigationItems } from './utils/navigation-item';
import useQuery from './hooks/use-query';
import MetaNavigation from './meta-navigation';
import Navigation from './navigation';

const App = () => {
	const [tonality, setTonality, color, setColor, pageName, fullscreen] =
		useQuery();

	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

	if (pageName || fullscreen) {
		return (
			<div className={`db-ui-${tonality} db-bg-${color}`}>
				<Outlet />
			</div>
		);
	}

	return (
		<DBPage
			className="db-bg-neutral-0"
			type="fixedHeaderFooter"
			slotHeader={
				<DBHeader
					drawerOpen={drawerOpen}
					onToggle={setDrawerOpen}
					slotBrand={
						<DBBrand title="React Showcase" anchorChildren>
							Showcase
						</DBBrand>
					}
					slotDesktopNavigation={
						<nav className="desktop-navigation">
							<ul>
								{getSortedNavigationItems().map((navItem) => (
									<li key={`router-path-${navItem.path}`}>
										<Link to={navItem.path}>
											{navItem.label}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					}
					slotMetaNavigation={
						<MetaNavigation
							onColorChange={setColor}
							onTonalityChange={setTonality}
						/>
					}
					slotCallToAction={
						/* TODO: Use DBSearchBar in future */
						<DBButton icon="search" variant="transparent">
							Search
						</DBButton>
					}
					slotActionBar={
						<>
							<DBButton icon="account" variant="transparent">
								Profile
							</DBButton>
							<DBButton icon="alert" variant="transparent">
								Notification
							</DBButton>
							<DBButton icon="help" variant="transparent">
								Help
							</DBButton>
						</>
					}>
					<Navigation />
				</DBHeader>
			}>
			<div className={`db-ui-${tonality} db-bg-${color}`}>
				<Outlet />
			</div>
		</DBPage>
	);
};

export default App;
