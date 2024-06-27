import React, { useCallback, useState } from 'react';
import { DBCard, DBDivider, DBLink } from '../../../../output/react/src';
import useQuery from '../hooks/use-query';
import type {
	ReactDefaultComponentProps,
	ReactDefaultComponentVariants
} from '../../../shared/react-default-component-data';

const VariantList = ({
	examples,
	color,
	SlotCode
}: ReactDefaultComponentVariants) => {
	const getElevation = useCallback(
		() => (color?.includes('3') ? '3' : color?.includes('2') ? '2' : '1'),
		[color]
	);

	const [open, setOpen] = useState<boolean>();

	return (
		<DBCard
			className="variants-card db-code-docs"
			elevationLevel={getElevation()}>
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

			{SlotCode && (
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
							<SlotCode />
						</DBCard>
					</div>
				</details>
			)}
		</DBCard>
	);
};

const DefaultComponent = ({
	title,
	variants,
	subComponent,
	isSubComponent,
	componentName
}: ReactDefaultComponentProps) => {
	const redirectURLSearchParams = process?.env?.REDIRECT_URL_SEARCH_PARAMS
		? process.env.REDIRECT_URL_SEARCH_PARAMS === 'true'
		: true;
	const pageName = useQuery(redirectURLSearchParams)[4];
	const color = useQuery(redirectURLSearchParams)[2];

	const getHref = (variantName: string): string => {
		if (typeof window !== 'undefined') {
			const searchParams = new URLSearchParams(
				window.location.href.split('?')[1]
			);
			searchParams.set('page', variantName.toLowerCase());
			return `${window.location.href.split('?')[0]}?${searchParams.toString()}`;
		}

		return '';
	};

	const openVariantInNewWindow = (
		event: React.MouseEvent<HTMLAnchorElement>,
		variantName: string
	) => {
		if (
			typeof window === 'undefined' ||
			!window.location.origin ||
			!window.location.href
		) {
			return;
		}

		const currentUrl = window.location.href.split('?');
		const rawComponentUrl = currentUrl[0];
		const searchParams = new URLSearchParams(currentUrl[1] ?? '');
		searchParams.set('page', variantName.toLowerCase());

		const regexComponentOverviewFragment = /\/[a-z\d\-_]*\/overview/;

		const openUrl = componentName
			? `${rawComponentUrl.replace(regexComponentOverviewFragment, `/${componentName}/overview`)}?${searchParams.toString()}`
			: `${currentUrl[0]}?${searchParams.toString()}`;

		window.open(openUrl, '_blank');
	};

	if (pageName) {
		const foundVariant = variants.find(
			(variant) => variant.name.toLowerCase() === pageName
		);
		if (foundVariant) {
			return <VariantList {...foundVariant} color={color} />;
		}
	}

	const HeadlineTag = isSubComponent ? 'h2' : 'h1';

	return (
		<>
			<div className="default-container">
				<HeadlineTag>{title}</HeadlineTag>
				{variants?.map((variant, index) => (
					<div key={`${variant.name}-${index}`}>
						<DBDivider></DBDivider>
						<DBLink
							className="link-headline"
							content="external"
							target="_blank"
							onClick={(event) => {
								openVariantInNewWindow(event, variant.name);
							}}
							href={getHref(variant.name)}>
							{variant.name}
						</DBLink>
						<VariantList {...variant} color={color} />
					</div>
				))}
			</div>
			{subComponent}
		</>
	);
};

export default DefaultComponent;
