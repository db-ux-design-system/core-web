import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import {
	type DefaultComponentProps,
	type DefaultComponentVariants,
	type PatternhubComponentProps
} from '../../shared/default-component-data';
import { DBCard, DBDivider, DBLink } from '../../../output/react/src';
import DefaultPage from './default-page';

const VariantList = ({ examples, SlotCode }: DefaultComponentVariants) => {
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
						{SlotCode}
					</DBCard>
				</div>
			</details>
		</DBCard>
	);
};

const VariantsWrapper = ({
	variants,
	componentName
}: {
	variants: DefaultComponentVariants[];
	componentName?: string;
}) => {
	const getHref = (
		variant: DefaultComponentVariants,
		componentName?: string
	) => {
		if (
			typeof window === 'undefined' ||
			!window.location.origin ||
			!window.location.href
		) {
			return '';
		}

		const currentUrlWithoutQuery = window.location.href.split('?')[0];
		const variantQuery = `?page=${variant.name.toLowerCase()}`;

		if (componentName) {
			return `${currentUrlWithoutQuery.split('components')[0]}/components/${componentName}${variantQuery}`;
		}

		return `${currentUrlWithoutQuery}${variantQuery}`;
	};

	return (
		<>
			{variants?.map((variant, index) => (
				<div key={`${variant.name}-${index}`}>
					<DBDivider></DBDivider>
					<h2>
						<DBLink
							content="external"
							target="_blank"
							href={getHref(variant, componentName)}>
							{variant.name}
						</DBLink>
					</h2>
					<VariantList {...variant} />
				</div>
			))}
		</>
	);
};

const DefaultComponent = ({
	title,
	variants,
	subComponent,
	isSubComponent,
	componentName
}: DefaultComponentProps & PatternhubComponentProps) => {
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

	return (
		<>
			{foundVariant && (
				<div>
					<VariantList {...foundVariant} />
				</div>
			)}
			{!foundVariant && !isSubComponent && (
				<DefaultPage>
					<div className="default-container">
						<h1>{title}</h1>
						<VariantsWrapper
							variants={variants}
							componentName={componentName}
						/>
					</div>
					{subComponent}
				</DefaultPage>
			)}
			{!foundVariant && isSubComponent && (
				<div className="default-container">
					<h2>{title}</h2>
					<VariantsWrapper
						variants={variants}
						componentName={componentName}
					/>
				</div>
			)}
		</>
	);
};

export default DefaultComponent;
