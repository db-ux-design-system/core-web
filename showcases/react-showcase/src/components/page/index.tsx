import {
	DBPage,
	DBBrand,
	DBButton,
	DBHeader,
	DBLink,
	DBMainNavigation,
	DBNavigationItem
} from '../../../../../output/react/src';
import { type DBPageProps } from '../../../../../output/react/src/components/page/model';
import defaultComponentVariants from '../../../../shared/page.json';
import { getVariants } from '../data';
import DefaultComponent from '../index';

const getPage = ({
	type,
	fadeIn,
	children,
	className,
	describedbyid,
	id,
	key,
	stylePath
}: DBPageProps) => (
	<DBPage
		type={type}
		fadeIn={fadeIn}
		className={className}
		describedbyid={describedbyid}
		id={id}
		key={key}
		stylePath={stylePath}
		slotHeader={
			<DBHeader
				slotBrand={
					<DBBrand
						title="DBHeader"
						imgSrc="https://db-ui.github.io/images/db_logo.svg">
						DBHeader
					</DBBrand>
				}
				slotMetaNavigation={
					<>
						<DBLink href="#">Imprint</DBLink>
						<DBLink href="#">Help</DBLink>
					</>
				}
				slotCallToAction={
					<DBButton icon="search" variant="text" noText>
						Search
					</DBButton>
				}
				slotActionBar={
					<>
						<DBButton icon="account" variant="text" noText>
							Profile
						</DBButton>
						<DBButton icon="alert" variant="text" noText>
							Notification
						</DBButton>
						<DBButton icon="help" variant="text" noText>
							Help
						</DBButton>
					</>
				}>
				<DBMainNavigation>
					<DBNavigationItem icon="account">
						<a href="#">{children}</a>
					</DBNavigationItem>
					<DBNavigationItem disabled>
						<a href="#">{children} disabled</a>
					</DBNavigationItem>
				</DBMainNavigation>
			</DBHeader>
		}
		slotFooter={<>Footer Content</>}>
		My Page Content
	</DBPage>
);

const PageComponent = () => {
	return (
		<DefaultComponent
			title="DBPage"
			variants={getVariants(
				defaultComponentVariants,
				getPage
			)}></DefaultComponent>
	);
};

export default PageComponent;
