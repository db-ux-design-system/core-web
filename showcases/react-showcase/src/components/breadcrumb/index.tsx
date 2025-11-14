import { DBBreadcrumb } from '../../../../../output/react/src';
import defaultComponentVariants from '../../../../shared/breadcrumb.json';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

type BreadcrumbItem = {
	href?: string;
	text: string;
	ariaCurrent?: 'page' | undefined;
};

type BreadcrumbExampleProps = {
	children?: BreadcrumbItem[];
	size?: 'small' | 'medium';
	className?: string;
	separator?: 'chevron' | 'slash';
};

const getBreadcrumb = ({
	children,
	size,
	className,
	separator
}: BreadcrumbExampleProps) => (
	<DBBreadcrumb size={size} className={className} separator={separator}>
		{children && Array.isArray(children)
			? children.map((item, index) =>
					item.href ? (
						<li key={index}>
							<a href={item.href}>{item.text}</a>
						</li>
					) : (
						<li key={index} aria-current={item.ariaCurrent as any}>
							<span>{item.text}</span>
						</li>
					)
				)
			: children}
	</DBBreadcrumb>
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
