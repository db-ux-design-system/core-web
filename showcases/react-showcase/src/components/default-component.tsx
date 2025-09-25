import React, { useCallback, useState } from 'react';
import { DBCard, DBDivider, DBLink } from '../../../../output/react/src';
import type {
	ReactDefaultComponentProps,
	ReactDefaultComponentVariants
} from '../../../shared/react-default-component-data';
import useQuery from '../hooks/use-query';

const redirectURLSearchParameters = process?.env?.REDIRECT_URL_SEARCH_PARAMS
	? process.env.REDIRECT_URL_SEARCH_PARAMS === 'true'
	: true;

// Function to convert component title to source file path
const getSourceFilePath = (title: string): string | undefined => {
	// Remove 'DB' prefix and convert to kebab-case
	const componentName = title
		.replace(/^DB/, '')
		.replaceAll(/([A-Z])/g, (match, letter, index) =>
			index > 0 ? `-${letter.toLowerCase()}` : letter.toLowerCase()
		);

	// Verify this is a valid component name by checking common patterns
	if (componentName && /^[a-z]+(-[a-z]+)*$/.test(componentName)) {
		return `packages/components/src/components/${componentName}/${componentName}.lite.tsx`;
	}
};

// Function to get GitHub source URL
const getGitHubSourceUrl = (
	title: string,
	branch?: string
): string | undefined => {
	const filePath = getSourceFilePath(title);
	if (!filePath) return;

	// Use provided branch, or try to detect from environment, fallback to 'main'
	const targetBranch =
		branch ??
		process.env.GITHUB_BRANCH ??
		process.env.BRANCH_NAME ??
		'main';

	return `https://github.com/db-ux-design-system/core-web/blob/${targetBranch}/${filePath}`;
};

const VariantList = ({
	name,
	examples,
	color,
	role,
	SlotCode
}: ReactDefaultComponentVariants) => {
	const getElevation = useCallback(
		() => (color?.includes('3') ? '3' : color?.includes('2') ? '2' : '1'),
		[color]
	);

	const [open, setOpen] = useState<boolean>();

	const validExamples = examples.filter(
		(example) => redirectURLSearchParameters || !example.experimental
	);

	return (
		<DBCard
			className="variants-card db-code-docs"
			elevationLevel={getElevation()}>
			<div
				role={role}
				aria-label={role ? name : undefined}
				className="variants-list">
				{validExamples.map((example, exampleIndex) => (
					<div
						key={`${example.name}-${exampleIndex}`}
						style={example.style}
						className={example.className}
						data-density={example.density}>
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
					<div data-density="functional">
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
	const pageName = useQuery(redirectURLSearchParameters)[4];
	const color = useQuery(redirectURLSearchParameters)[2];

	const getHref = (variantName: string): string => {
		if (typeof globalThis !== 'undefined') {
			const searchParameters = new URLSearchParams(
				globalThis?.location?.href.split('?')[1]
			);
			searchParameters.set('page', variantName.toLowerCase());
			return `${globalThis?.location?.href.split('?')[0]}?${searchParameters.toString()}`;
		}

		return '';
	};

	const openVariantInNewWindow = (
		event: React.MouseEvent<HTMLAnchorElement>,
		variantName: string
	) => {
		if (
			typeof globalThis === 'undefined' ||
			!globalThis.location.origin ||
			!globalThis.location.href
		) {
			return;
		}

		const currentUrl = globalThis.location.href.split('?');
		const rawComponentUrl = currentUrl[0];
		const searchParameters = new URLSearchParams(currentUrl[1] ?? '');
		searchParameters.set('page', variantName.toLowerCase());

		const regexComponentOverviewFragment = /\/[a-z\d\-_]*\/overview/;

		const openUrl = componentName
			? `${rawComponentUrl.replace(regexComponentOverviewFragment, `/${componentName}/overview`)}?${searchParameters.toString()}`
			: `${currentUrl[0]}?${searchParameters.toString()}`;

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
	const sourceUrl = getGitHubSourceUrl(title);

	return (
		<>
			<div className="default-container">
				<div className="component-header">
					<HeadlineTag>{title}</HeadlineTag>
					{!redirectURLSearchParameters &&
						sourceUrl &&
						!isSubComponent && (
							<DBLink
								target="_blank"
								referrerPolicy="no-referrer"
								href={sourceUrl}
								content="external">
								View Source
							</DBLink>
						)}
				</div>
				{variants
					?.filter(
						(variant) =>
							redirectURLSearchParameters ||
							variant.examples.find(
								(example) => !example.experimental
							)
					)
					.map((variant, index) => (
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
