import {
	DBShell,
	DBBrand,
	DBButton,
	DBHeader,
	DBLink,
	DBNavigation,
	DBNavigationItem
} from '../../../../../output/react/src';
import { type DBShellProps } from '../../../../../output/react/src/components/page/model';
import defaultComponentVariants from '../../../../shared/page.json';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';
import { type BaseComponentProps } from '../base-component-data';

const getPage = ({
	variant,
	fadeIn,
	children,
	className,
	describedbyid,
	id
}: DBShellProps) => (
	<DBShell
		variant={variant}
		fadeIn={fadeIn}
		className={className}
		describedbyid={describedbyid}
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
	</DBShell>
);

const PageComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBShell"
			variants={getVariants(
				defaultComponentVariants,
				getPage,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default PageComponent;
