import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import type {
	DefaultComponentProps,
	DefaultComponentVariants
} from '../../shared/default-component-data';
import DefaultPage from './default-page';
import { DBCard, DBDivider, DBLink } from './src';

const VariantList = ({ examples, slotCode }: DefaultComponentVariants) => {
	const [open, setOpen] = useState<boolean>();
	return (
		<DBCard className="variants-card db-code-docs">
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

			<details
				className="code-details"
				onToggle={() => {
					setOpen(!open);
				}}>
				<summary
					className="db-button code-button"
					data-size="small"
					data-variant="filled">
					{open ? 'Hide code' : 'Show code'}
				</summary>
				<div className="db-density-functional">
					<div className="backdrop" />
					<DBCard className="code" spacing="small">
						{slotCode}
					</DBCard>
				</div>
			</details>
		</DBCard>
	);
};

const DefaultComponent = ({ title, variants }: DefaultComponentProps) => {
	const [foundVariant, setFoundVariant] =
		useState<DefaultComponentVariants>();
	const router = useRouter();

	useEffect(() => {
		if (router.query) {
			const pageName = router.query.page?.toString();
			if (pageName) {
				const foundVariant = variants.find(
					(variant) => variant.name.toLowerCase() === pageName
				);
				setFoundVariant(foundVariant);
			}
		}
	}, [router]);

	const getHref = (variant: DefaultComponentVariants) =>
		typeof window !== 'undefined' &&
		window.location.origin &&
		window.location.href
			? `${window.location.href.split('?')[0]}?page=${variant.name.toLowerCase()}`
			: '';

	return (
		<>
			{foundVariant && (
				<div>
					<VariantList {...foundVariant} />
				</div>
			)}
			{!foundVariant && (
				<DefaultPage>
					<div className="default-container">
						<h1>{title}</h1>
						{variants?.map((variant, index) => (
							<div key={`${variant.name}-${index}`}>
								<DBDivider></DBDivider>
								<h2>
									<DBLink
										content="external"
										target="_blank"
										href={getHref(variant)}>
										{variant.name}
									</DBLink>
								</h2>
								<VariantList {...variant} />
							</div>
						))}
					</div>
				</DefaultPage>
			)}
		</>
	);
};

export default DefaultComponent;
