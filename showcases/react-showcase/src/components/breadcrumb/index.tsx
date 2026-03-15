import { DBBreadcrumb } from '../../../../../output/react/src';
import defaultComponentVariants from '../../../../shared/breadcrumb.json';
import { type BaseComponentProps } from '../base-component-data';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

type BreadcrumbItem = {
	href?: string;
	text: string;
	icon?: string;
	ariaCurrent?: 'page' | undefined;
};

type BreadcrumbExampleProps = {
	items?: BreadcrumbItem[];
	size?: 'small' | 'medium';
	className?: string;
	separator?: 'chevron' | 'slash';
	maxItems?: number;
	ariaLabel?: string;
	ellipsisAriaLabel?: string;
	id?: string;
};

const getBreadcrumb = ({
	items,
	size,
	className,
	separator,
	maxItems,
	ariaLabel,
	ellipsisAriaLabel,
	id
}: BreadcrumbExampleProps) => (
	<DBBreadcrumb
		size={size}
		className={className}
		separator={separator}
		maxItems={maxItems}
		items={items}
		ariaLabel={ariaLabel}
		ellipsisAriaLabel={ellipsisAriaLabel}
		id={id}
	/>
);

const BreadcrumbComponent = (props: BaseComponentProps) => (
	<DefaultComponent
		title="DBBreadcrumb"
		subComponent={props.subComponent}
		variants={getVariants(
			defaultComponentVariants,
			getBreadcrumb,
			props.slotCode
		)}></DefaultComponent>
);

export default BreadcrumbComponent;
