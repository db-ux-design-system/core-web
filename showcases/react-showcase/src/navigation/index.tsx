import { Link } from 'react-router-dom';
import {
	getSortedNavigationItems,
	NAVIGATION_ITEMS
} from '../utils/navigation-item';

const Navigation = () => (
	/* TODO: use DBNavigation component in future */
	<nav className="desktop-navigation">
		<ul>
			{getSortedNavigationItems().map((navItem) => (
				<li key={`router-path-${navItem.path}`}>
					<Link to={navItem.path}>{navItem.label}</Link>
				</li>
			))}
		</ul>
	</nav>
);

export default Navigation;
