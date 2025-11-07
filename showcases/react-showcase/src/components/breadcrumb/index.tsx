import { DBBreadcrumb } from '../../../../../output/react/src';
import defaultComponentVariants from '../../../../shared/breadcrumb.json';
import { getVariants } from '../data';
import DefaultComponent from '../default-component';

const getBreadcrumb = ({ children, size }: any) => (
	<DBBreadcrumb size={size}>
		{children && Array.isArray(children)
			? children.map((item: any, index: number) =>
					item.href ? (
						<li key={index}>
							<a href={item.href}>{item.text}</a>
						</li>
					) : (
						<li key={index} aria-current={item.ariaCurrent}>
							<span>{item.text}</span>
						</li>
					)
				)
			: children}
	</DBBreadcrumb>
);

const BreadcrumbComponent = (props: any) => {
	return (
		<DefaultComponent
			title="DBBreadcrumb"
			variants={getVariants(
				defaultComponentVariants,
				getBreadcrumb,
				props.slotCode
			)}></DefaultComponent>
	);
};

export default BreadcrumbComponent;
