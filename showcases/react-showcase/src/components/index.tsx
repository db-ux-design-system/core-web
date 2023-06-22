import { DBCodeDocs, DBDivider, DBLink } from '../../../../output/react/src';
import useQuery from '../hooks/use-query';
import type {
	DefaultComponentProps,
	DefaultComponentVariants
} from '../../../shared/default-component-data';

const VariantList = ({ examples }: DefaultComponentVariants) => (
	<DBCodeDocs className="variants-card">
		<div className="variants-list">
			{examples.map((example, exampleIndex) => (
				<div
					key={`${example.name}-${exampleIndex}`}
					style={example.style}
					className={example.className}>
					{example.example}
				</div>
			))}
		</div>
	</DBCodeDocs>
);

const DefaultComponent = ({ title, variants }: DefaultComponentProps) => {
	const pageName = useQuery()[4];

	if (pageName) {
		const foundVariant = variants.find(
			(variant) => variant.name.toLowerCase() === pageName
		);
		if (foundVariant) {
			return <VariantList {...foundVariant} />;
		}
	}

	return (
		<div className="default-container">
			<h1>{title}</h1>
			{variants?.map((variant, index) => (
				<div key={`${variant.name}-${index}`}>
					<DBDivider></DBDivider>
					<DBLink
						className="link-headline"
						content="external"
						target="_blank"
						href={`${
							window.location.href
						}&page=${variant.name.toLowerCase()}`}>
						{variant.name}
					</DBLink>
					<VariantList {...variant} />
				</div>
			))}
		</div>
	);
};

export default DefaultComponent;
