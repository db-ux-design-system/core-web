import {
	DBBrand,
	DBButton,
	DBHeader,
	DBLink,
	DBNavigation,
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
			<DBButton icon="magnifying_glass" variant="ghost" noText>
				Search
			</DBButton>
		}
		actionBar={
			<>
				<DBButton icon="user" variant="ghost" noText>
					Profile
				</DBButton>
				<DBButton icon="bell" variant="ghost" noText>
					Notification
				</DBButton>
				<DBButton icon="question_mark_circle" variant="ghost" noText>
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
		onToggle={onToggle}>
		<DBNavigation>
			<DBNavigationItem icon="user">
				<a href="#">{children}</a>
			</DBNavigationItem>
			<DBNavigationItem disabled>
				<a href="#">{children} disabled</a>
			</DBNavigationItem>
		</DBNavigation>
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
