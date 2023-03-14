import { DBCodeDocs, DBDivider, DBLink } from '../../../../output/react/src';
import useQuery from '../hooks/use-query';
import {
	type DefaultComponentProps,
	type DefaultComponentVariants
} from './data';

const VariantList = ({ examples }: DefaultComponentVariants) => (
	<DBCodeDocs
		className="variants-card"
		codeSnippets={examples
			.filter((example) => example.code)
			.map((example) => `/* ${example.name} */\n${example.code}`)}>
		<dl className="variants-list">
			{examples.map((example, exampleIndex) => (
				<div
					key={`${example.name}-${exampleIndex}`}
					style={example.style}
					className={example.className}>
					<dt className="example-name">{example.name}</dt>
					<dd>{example.example}</dd>
				</div>
			))}
		</dl>
	</DBCodeDocs>
);

const DefaultComponent = ({
	title,
	description,
	variants
}: DefaultComponentProps) => {
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
			{description ?? <></>}
			{variants?.map((variant, index) => (
				<div key={`${variant.name}-${index}`}>
					<DBDivider></DBDivider>
					<h2>
						<DBLink
							content="external"
							target="_blank"
							href={`${
								window.location.href
							}&page=${variant.name.toLowerCase()}`}>
							{variant.name}
						</DBLink>
					</h2>
					<VariantList {...variant} />
				</div>
			))}
		</div>
	);
};

export default DefaultComponent;
