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
import DefaultComponent from '../default-component';
import { type BaseComponentProps } from '../base-component-data';

const getHeader = ({
	drawerOpen,
	forceMobile,
	burgerMenuLabel,
	children,
	className,
	describedbyid,
	id,
	key,
	onToggle,
	width,
	example,
	withNavigation,
	withName
}: DBHeaderProps & {
	example: boolean;
	withName: boolean;
	withNavigation: boolean;
}) => (
	<DBHeader
		width={width}
		brand={
			<DBBrand title="DBHeader">
				{(!example || withName) && 'DBHeader'}
			</DBBrand>
		}
		metaNavigation={
			!example && (
				<>
					<DBLink href="#">Imprint</DBLink>
					<DBLink href="#">Help</DBLink>
				</>
			)
		}
		primaryAction={
			!example && (
				<DBButton icon="magnifying_glass" variant="ghost" noText>
					Search
				</DBButton>
			)
		}
		secondaryAction={
			!example && (
				<>
					<DBButton icon="user" variant="ghost" noText>
						Profile
					</DBButton>
					<DBButton icon="bell" variant="ghost" noText>
						Notification
					</DBButton>
					<DBButton
						icon="question_mark_circle"
						variant="ghost"
						noText>
						Help
					</DBButton>
				</>
			)
		}
		drawerOpen={drawerOpen}
		forceMobile={forceMobile}
		burgerMenuLabel={burgerMenuLabel}
		className={className}
		describedbyid={describedbyid}
		id={id}
		key={key}
		onToggle={onToggle}>
		{(!example || withNavigation) && (
			<DBNavigation aria-label={children}>
				<DBNavigationItem icon="user">
					<a href="#">{children}</a>
				</DBNavigationItem>
				<DBNavigationItem disabled>
					<a href="#">{children} disabled</a>
				</DBNavigationItem>
			</DBNavigation>
		)}
	</DBHeader>
);

const HeaderComponent = (props: BaseComponentProps) => {
	return (
		<DefaultComponent
			title="DBHeader"
			variants={getVariants(
				defaultComponentVariants,
				getHeader,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default HeaderComponent;
