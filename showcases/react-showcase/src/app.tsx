import { Link, Outlet, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { DBBrand, DBHeader, DBPage } from '../../../output/react/src';

import {
	COLOR,
	COLORS,
	TONALITIES,
	TONALITY,
	COLOR_CONST,
	TONALITY_CONST
} from '../../../packages/components/src/shared/constants';
import { NAVIGATION_ITEMS } from './utils/navigation-item';

const App = () => {
	const [searchParameters, setSearchParameters] = useSearchParams();
	const [tonality, setTonality] = useState<string>(
		searchParameters.get(TONALITY_CONST) ?? TONALITY.REGULAR
	);
	const [color, setColor] = useState<string>(
		searchParameters.get(COLOR_CONST) ?? COLOR.NEUTRAL_0
	);

	useEffect(() => {
		for (const [key, value] of searchParameters.entries()) {
			if (value) {
				if (key === TONALITY_CONST && tonality !== value) {
					setTonality(value);
				}

				if (key === COLOR_CONST && color !== value) {
					setColor(value);
				}
			}
		}
	}, [searchParameters]);

	useEffect(() => {
		setSearchParameters({ tonality, color });
	}, [color, tonality]);

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
			}
			slotFooter={<div>FOOTER</div>}>
			<div className={`db-ui-${tonality} db-bg-${color}`}>
				<Outlet />
			</div>
		</DBPage>
	);
};

export default App;
