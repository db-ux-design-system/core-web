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
	tabIndex,
	title
}: DBPageProps) => (
	<DBPage
		type={type}
		fadeIn={fadeIn}
		className={className}
		describedbyid={describedbyid}
		id={id}
		key={key}
		tabIndex={tabIndex}
		header={
			<DBHeader
				brand={
					<DBBrand
						title="DBHeader"
						imgSrc="https://db-ui.github.io/images/db_logo.svg">
						DBHeader
					</DBBrand>
				}
				metaNavigation={
					<>
						<DBLink href="#">Imprint</DBLink>
						<DBLink href="#">Help</DBLink>
					</>
				}
				callToAction={
					<DBButton icon="search" variant="text" noText>
						Search
					</DBButton>
				}
				actionBar={
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
				}
				title={title}>
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
		footer={<>Footer Content</>}>
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
