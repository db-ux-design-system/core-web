import { useRouter } from 'next/router';
import Link from 'next/link';
import { DBNavigationItem } from '../../../../output/react/src';
import type { NavigationItem } from '../../data/routes';

const NavItem = ({ navItem }: { navItem: NavigationItem }) => {
	const router = useRouter();

	const isActive =
		navItem.path === '/'
			? router.pathname === '/'
			: router.pathname.includes(navItem.path ?? '') ||
			  Boolean(
					navItem.subNavigation?.find((subItem) =>
						router.pathname.includes(subItem.path ?? '')
					)
			  );

	return (
		<DBNavigationItem
			active={isActive}
			backButtonText={`Back to ${navItem.label}`}
			slotSubNavigation={
				navItem.subNavigation && (
					<>
						{navItem?.subNavigation.map(
							(subItem: NavigationItem) => (
								<NavItem
									key={`router-path-${subItem.path}`}
									navItem={subItem}></NavItem>
							)
						)}
					</>
				)
			}>
			{navItem.subNavigation ? (
				navItem.label
			) : (
				<Link
					key={`router-path-${navItem.path}`}
					href={navItem.path ?? ''}>
					{navItem.label}
				</Link>
			)}
		</DBNavigationItem>
	);
};

export default NavItem;
