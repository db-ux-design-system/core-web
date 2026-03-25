import { DBBreadcrumbItem } from '@components';
import type { DBBreadcrumbItemProps } from '@components/src/components/breadcrumb-item/model';
import type { PatternhubProps } from '../../../../../output/react/src/shared/model';
import CardWrapperShowcase from '../../../../../output/react/src/shared/showcase/card-wrapper.showcase';
import ContainerWrapperShowcase from '../../../../../output/react/src/shared/showcase/container-wrapper.showcase';
import LinkWrapperShowcase from '../../../../../output/react/src/shared/showcase/link-wrapper.showcase';
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
	isPatternhub,
	isSubComponent,
	componentName
}: PatternhubProps & {
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
		<ContainerWrapperShowcase
			title={heading}
			isPatternhub={isPatternhub}
			isSubComponent={isSubComponent}>
			{variants.map((variant) => (
				<LinkWrapperShowcase
					key={variant.name}
					exampleName={variant.name}>
					<CardWrapperShowcase>
						{variant.examples.map((example) => (
							<div
								key={example.name}
								className={example.className}>
								<h3>{example.name}</h3>
								{getBreadcrumbItem(example.props ?? {})}
							</div>
						))}
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
			))}
		</ContainerWrapperShowcase>
	);
};

export default BreadcrumbItemComponent;
