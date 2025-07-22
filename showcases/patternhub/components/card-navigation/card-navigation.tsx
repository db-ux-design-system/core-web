import Link from 'next/link';
import { useRouter } from 'next/router';
import { DBCard, DBIcon } from '../../../../output/react/src';
import { getAllNavigationItems } from '../../data/routes';
import DefaultPage from '../default-page';

const CardNavigation = () => {
	const router = useRouter();

	const navigationItemParent = getAllNavigationItems().find(
		(navItem) => navItem.path === router.asPath
	);

	return (
		<DefaultPage noNavigation>
			{navigationItemParent && (
				<div className="card-navigation">
					{navigationItemParent.subNavigation?.map(
						(navItem, index) => (
							<Link
								key={`navigation-card-${navItem.path}`}
								href={navItem.path ?? '/'}>
								<DBCard behavior="interactive" spacing="medium">
									<small>{index + 1}.</small>
									<p>{navItem.label}</p>
									<DBIcon icon="arrow_right">Next</DBIcon>
								</DBCard>
							</Link>
						)
					)}
				</div>
			)}
		</DefaultPage>
	);
};

export default CardNavigation;
