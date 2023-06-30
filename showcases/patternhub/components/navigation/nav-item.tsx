import { useRouter } from 'next/router';
import Link from 'next/link';
import { DBNavigationItem } from '../../../../output/react/src';
import type { NavigationItem } from '../../data/routes';

const NavItem = ({ navItem }: { navItem: NavigationItem }) => {
	const router = useRouter();

	const isActive =
		navItem.path === '/'
			? router.pathname === '/'
			: router.pathname.includes(navItem.path ?? '');

	return (
		<DBNavigationItem
			active={isActive}
			backButtonText={`Back to ${navItem.label}`}
			slotSubNavigation={
				navItem.subNavigation && (
					<>
						{navItem?.subNavigation.map(
							(subItem: NavigationItem) => (
								<>
									{subItem.subNavigation ? (
										<NavItem navItem={subItem}></NavItem>
									) : (
										<Link
											key={`router-path-${subItem.path}`}
											href={subItem.path ?? ''}>
											<NavItem
												navItem={subItem}></NavItem>
										</Link>
									)}
								</>
							)
						)}
					</>
				)
			}>
			{navItem.label}
		</DBNavigationItem>
	);
};

export default NavItem;
