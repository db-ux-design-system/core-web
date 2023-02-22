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
		<ul className="variants-list">
			{examples.map((example, exampleIndex) => (
				<li
					key={`${example.name}-${exampleIndex}`}
					style={example.style}
					className={example.className}>
					<p className="example-name">
						<small>{example.name}</small>
					</p>
					{example.example}
				</li>
			))}
		</ul>
	</DBCodeDocs>
);

const DefaultComponent = ({
	title,
	description,
	variants
}: DefaultComponentProps) => {
	const pageName = useQuery()[4];
	const setPageName = useQuery()[5];

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
					<DBLink
						content="external"
						onClick={() => setPageName(variant.name.toLowerCase())}>
						<strong>{variant.name}</strong>
					</DBLink>
					<VariantList {...variant} />
				</div>
			))}
		</div>
	);
};

export default DefaultComponent;
