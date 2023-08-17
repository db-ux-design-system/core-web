import { navigationItems } from './utils/navigation-items.js';

const getNavigation = (mobile) =>
	`<nav class="desktop-navigation" ${mobile && 'slot="navigation-mobile"'}>
				<ul>
					${navigationItems
						.map(
							(item) =>
								`<li><a href=".${item.path}">${item.label}</a></li>`
						)
						.join('')}
				</ul>
			</nav>`;

export default getNavigation;
