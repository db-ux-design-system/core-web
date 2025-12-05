import { DBBreadcrumb } from '../../../../../output/react/src';
import defaultComponentVariants from '../../../../shared/breadcrumb.json';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

type BreadcrumbItem = {
	href?: string;
	text: string;
	icon?: string;
	ariaCurrent?: 'page' | undefined;
};

type BreadcrumbExampleProps = {
	children?: BreadcrumbItem[];
	size?: 'small' | 'medium';
	className?: string;
	separator?: 'chevron' | 'slash';
	maxItems?: number;
	collapsedMenu?: boolean;
	ariaLabel?: string;
	id?: string;
};

const getBreadcrumb = ({
	children,
	size,
	className,
	separator,
	maxItems,
	collapsedMenu,
	ariaLabel,
	id
}: BreadcrumbExampleProps) => (
	<DBBreadcrumb
		size={size}
		className={className}
		separator={separator}
		maxItems={maxItems}
		collapsedMenu={collapsedMenu}
		items={children}
		ariaLabel={ariaLabel}
		id={id}
	/>
);

type BreadcrumbComponentProps = {
	slotCode?: Record<string, React.FC>;
};

const BreadcrumbComponent = (props: BreadcrumbComponentProps) => (
	<DefaultComponent
		title="DBBreadcrumb"
		variants={getVariants(
			defaultComponentVariants,
			getBreadcrumb,
			props.slotCode
		)}></DefaultComponent>
);

export default BreadcrumbComponent;
