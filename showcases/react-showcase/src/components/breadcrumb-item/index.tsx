import { DBBreadcrumbItem } from '@components';
import type { DBBreadcrumbItemProps } from '@components/src/components/breadcrumb-item/model';
import defaultComponentVariants from '../../../../patternhub/data/breadcrumb-item.json';

const getBreadcrumbItem = ({
	href,
	text,
	icon,
	ariaCurrent,
	disabled,
	className,
	id
}: DBBreadcrumbItemProps) => (
	<nav className="db-breadcrumb" aria-label="Breadcrumb">
		<ol>
			<DBBreadcrumbItem
				href={href}
				text={text}
				icon={icon}
				ariaCurrent={ariaCurrent}
				disabled={disabled}
				className={className}
				id={id}
			/>
		</ol>
	</nav>
);

const BreadcrumbItemComponent = ({
	isSubComponent,
	componentName
}: {
	isSubComponent?: boolean;
	componentName?: string;
}) => {
	const variants = defaultComponentVariants as Array<{
		name: string;
		examples: Array<{
			name: string;
			className?: string;
			props?: DBBreadcrumbItemProps;
		}>;
	}>;
	const heading = isSubComponent
		? (componentName ?? 'DBBreadcrumbItem')
		: 'DBBreadcrumbItem';

	return (
		<div>
			<h2>{heading}</h2>
			{variants.map((variant) => (
				<section key={variant.name}>
					<h3>{variant.name}</h3>
					{variant.examples.map((example) => (
						<div key={example.name} className={example.className}>
							{getBreadcrumbItem(example.props ?? {})}
						</div>
					))}
				</section>
			))}
		</div>
	);
};

export default BreadcrumbItemComponent;
