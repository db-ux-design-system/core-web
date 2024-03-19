import {
	DBBrand,
	DBButton,
	DBHeader,
	DBLink,
	DBMainNavigation,
	DBNavigationItem
} from '../../../../../output/react/src';
import { type DBHeaderProps } from '../../../../../output/react/src/components/header/model';
import defaultComponentVariants from '../../../../shared/header.json';
import { getVariants } from '../data';
import DefaultComponent from '../index';

const getHeader = ({
	drawerOpen,
	forceMobile,
	burgerMenuLabel,
	children,
	className,
	describedbyid,
	id,
	key,
	stylePath,
	tabIndex,
	title,
	onToggle
}: DBHeaderProps) => (
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
		drawerOpen={drawerOpen}
		forceMobile={forceMobile}
		burgerMenuLabel={burgerMenuLabel}
		className={className}
		describedbyid={describedbyid}
		id={id}
		key={key}
		stylePath={stylePath}
		tabIndex={tabIndex}
		title={title}
		onToggle={onToggle}>
		<DBMainNavigation>
			<DBNavigationItem icon="account">
				<a href="#">{children}</a>
			</DBNavigationItem>
			<DBNavigationItem disabled>
				<a href="#">{children} disabled</a>
			</DBNavigationItem>
		</DBMainNavigation>
	</DBHeader>
);

const HeaderComponent = () => {
	return (
		<DefaultComponent
			title="DBHeader"
			variants={getVariants(
				defaultComponentVariants,
				getHeader
			)}></DefaultComponent>
	);
};

export default HeaderComponent;
