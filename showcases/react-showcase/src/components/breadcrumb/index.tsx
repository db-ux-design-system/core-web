import { DBBreadcrumb } from '../../../../../output/react/src';
import type { PatternhubProps } from '../../../../../output/react/src/shared/model';
import CardWrapperShowcase from '../../../../../output/react/src/shared/showcase/card-wrapper.showcase';
import ContainerWrapperShowcase from '../../../../../output/react/src/shared/showcase/container-wrapper.showcase';
import LinkWrapperShowcase from '../../../../../output/react/src/shared/showcase/link-wrapper.showcase';
import defaultComponentVariants from '../../../../patternhub/data/breadcrumb.json';

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

const BreadcrumbComponent = ({
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
			props?: BreadcrumbExampleProps;
		}>;
	}>;
	const heading = isSubComponent
		? (componentName ?? 'DBBreadcrumb')
		: 'DBBreadcrumb';

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
								{getBreadcrumb(example.props ?? {})}
							</div>
						))}
					</CardWrapperShowcase>
				</LinkWrapperShowcase>
			))}
		</ContainerWrapperShowcase>
	);
};

export default BreadcrumbComponent;
