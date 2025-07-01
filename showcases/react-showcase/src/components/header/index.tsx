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
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getHeader = ({
	drawerOpen,
	forceMobile,
	burgerMenuLabel,
	children,
	className,
	id,
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
			)
		}
		drawerOpen={drawerOpen}
		forceMobile={forceMobile}
		burgerMenuLabel={burgerMenuLabel}
		className={className}
		id={id}
		onToggle={onToggle}>
		{(!example || withNavigation) && (
			<DBNavigation aria-label={children}>
				<DBNavigationItem icon="x_placeholder">
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
