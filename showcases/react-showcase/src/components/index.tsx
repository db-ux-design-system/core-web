import { useCallback } from 'react';
import { DBCard, DBDivider, DBLink } from '../../../../output/react/src';
import useQuery from '../hooks/use-query';
import type {
	DefaultComponentProps,
	DefaultComponentVariants
} from '../../../shared/default-component-data';

const VariantList = ({
	name,
	examples,
	color,
	role
}: DefaultComponentVariants) => {
	const getElevation = useCallback(
		() => (color?.includes('3') ? '3' : color?.includes('2') ? '2' : '1'),
		[color]
	);

	return (
		<DBCard className="variants-card" elevationLevel={getElevation()}>
			<div role={role} aria-label={name} className="variants-list">
				{examples.map((example, exampleIndex) => (
					<div
						key={`${example.name}-${exampleIndex}`}
						style={example.style}
						className={example.className}>
						{example.example}
					</div>
				))}
			</div>
		</DBCard>
	);
};

const DefaultComponent = ({ title, variants }: DefaultComponentProps) => {
	const pageName = useQuery()[4];
	const color = useQuery()[2];

	if (pageName) {
		const foundVariant = variants.find(
			(variant) => variant.name.toLowerCase() === pageName
		);
		if (foundVariant) {
			return <VariantList {...foundVariant} color={color} />;
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
					<VariantList {...variant} color={color} />
				</div>
			))}
		</div>
	);
};

export default DefaultComponent;
