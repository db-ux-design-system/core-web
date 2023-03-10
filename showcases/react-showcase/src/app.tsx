import { Link, Outlet } from 'react-router-dom';
import { DBBrand, DBHeader, DBPage } from '../../../output/react/src';

import {
	COLORS,
	TONALITIES
} from '../../../packages/components/src/shared/constants';
import { NAVIGATION_ITEMS } from './utils/navigation-item';
import useQuery from './hooks/use-query';

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
					slotBrand={<DBBrand anchorChildren>React Showcase</DBBrand>}
					slotDesktopNavigation={
						<nav className="desktop-navigation">
							<ul>
								{NAVIGATION_ITEMS.sort((a, b) => {
									return a.home ? -1 : 0;
								}).map((navItem) => (
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
						<div>
							<select
								value={tonality}
								onChange={(event) => {
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
								onChange={(event) => {
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
