import {
	DBBrand,
	DBButton,
	DBHeader,
	DBLink,
	DBNavigation,
	DBNavigationItem,
	DBPage
} from '../../../../../output/react/src';
import { type DBPageProps } from '../../../../../output/react/src/components/page/model';
import defaultComponentVariants from '../../../../shared/page.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getPage = ({ variant, fadeIn, children, className, id }: DBPageProps) => (
	<DBPage
		variant={variant}
		fadeIn={fadeIn}
		className={className}
		id={id}
		header={
			<DBHeader
				brand={<DBBrand title="DBHeader">DBHeader</DBBrand>}
				metaNavigation={
					<>
						<DBLink href="#">Imprint</DBLink>
						<DBLink href="#">Help</DBLink>
					</>
				}
				primaryAction={
					<DBButton icon="magnifying_glass" variant="ghost" noText>
						Search
					</DBButton>
				}
				secondaryAction={
					<>
						<DBButton icon="x_placeholder" variant="ghost" noText>
							Profile
						</DBButton>
						<DBButton icon="x_placeholder" variant="ghost" noText>
							Notification
						</DBButton>
						<DBButton icon="x_placeholder" variant="ghost" noText>
							Help
						</DBButton>
					</>
				}>
				<DBNavigation>
					<DBNavigationItem icon="x_placeholder">
						<a href="#">{children}</a>
					</DBNavigationItem>
					<DBNavigationItem disabled>
						<a href="#">{children} disabled</a>
					</DBNavigationItem>
				</DBNavigation>
			</DBHeader>
		}
		footer={<>Footer Content</>}>
		My Page Content
	</DBPage>
);

const PageComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBPage"
			variants={getVariants(
				defaultComponentVariants,
				getPage,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default PageComponent;
