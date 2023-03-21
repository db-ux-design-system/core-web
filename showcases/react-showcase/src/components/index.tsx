import { renderToString } from 'react-dom/server';
import { DBCodeDocs, DBDivider, DBLink } from '../../../../output/react/src';
import useQuery from '../hooks/use-query';
import type {
	DefaultComponentProps,
	DefaultComponentVariants
} from '../../../shared/default-component-data';

const showcaseName = import.meta.env.VITE_NAME;

const VariantList = ({ examples }: DefaultComponentVariants) => (
	<DBCodeDocs
		className="variants-card"
		codeSnippets={examples
			.filter((example) => example.code)
			.map(
				(example) =>
					`/* ${example.name} */\n${
						showcaseName === 'html' && example.example
							? renderToString(example.example)
							: example.code
					}`
			)}>
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
