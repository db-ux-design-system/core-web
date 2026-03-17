import { DBBreadcrumb } from '../../../../../output/react/src';
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

const BreadcrumbComponent = ({ subComponent }: { subComponent?: boolean }) => {
	const variants = defaultComponentVariants as Array<{
		name: string;
		examples: Array<{
			name: string;
			className?: string;
			props?: BreadcrumbExampleProps;
		}>;
	}>;

	return (
		<div>
			{subComponent ? null : <h2>DBBreadcrumb</h2>}
			{variants.map((variant) => (
				<section key={variant.name}>
					<h3>{variant.name}</h3>
					{variant.examples.map((example) => (
						<div key={example.name} className={example.className}>
							{getBreadcrumb(example.props ?? {})}
						</div>
					))}
				</section>
			))}
		</div>
	);
};

export default BreadcrumbComponent;
