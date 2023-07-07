import type { ChangeEvent } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {
	DBBrand,
	DBHeader,
	DBPage,
	DBNavigationItem
} from '../../../output/react/src';
import {
	COLORS,
	TONALITIES
} from '../../../packages/components/src/shared/constants';
import { getSortedNavigationItems } from './utils/navigation-item';
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
											<DBNavigationItem>
												{navItem.label}
											</DBNavigationItem>
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
