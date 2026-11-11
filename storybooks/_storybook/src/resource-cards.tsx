import { DBCard } from '@components';

declare const __FRAMEWORK_URLS__: {
	html: string;
	angular: string;
	react: string;
	vue: string;
	webComponents: string;
};

type Resource = {
	title: string;
	description: string;
	url: string;
	/** Path of the icon, relative to the Storybook root. */
	icon: string;
	label: string;
};

const getIconPath = (icon: string) => `./framework-icons/${icon}`;

const RESOURCES: Resource[] = [
	{
		title: 'HTML5',
		description: 'Native HTML components',
		url: `${__FRAMEWORK_URLS__.html}/?path=/docs/getting-started--docs`,
		icon: getIconPath('html5.svg'),
		label: 'View Storybook'
	},
	{
		title: 'Angular',
		description: 'Native Angular components',
		url: `${__FRAMEWORK_URLS__.angular}/?path=/docs/getting-started--docs`,
		icon: getIconPath('angular.svg'),
		label: 'View Storybook'
	},
	{
		title: 'React',
		description: 'Native React components',
		url: `${__FRAMEWORK_URLS__.react}/?path=/docs/getting-started--docs`,
		icon: getIconPath('react.svg'),
		label: 'View Storybook'
	},
	{
		title: 'Vue',
		description: 'Native Vue 3 components',
		url: `${__FRAMEWORK_URLS__.vue}/?path=/docs/getting-started--docs`,
		icon: getIconPath('vue.svg'),
		label: 'View Storybook'
	},
	{
		title: 'Web Components',
		description: 'Framework-agnostic custom elements',
		url: `${__FRAMEWORK_URLS__.webComponents}/?path=/docs/getting-started--docs`,
		icon: getIconPath('webcomponents.svg'),
		label: 'View Storybook'
	}
];

const PLATFORM: Resource = {
	title: 'Design System Platform',
	description:
		'Design guidelines, setup per framework and Learn articles for design and development',
	url: 'https://design-system.deutschebahn.com/',
	// Logo of the Storybook UI, see `staticDirs` in main.ts.
	icon: './brand/images/logo.svg',
	label: 'Open Platform'
};

const ResourceCard = ({ resource }: { resource: Resource }) => (
	<a
		href={resource.url}
		target="_blank"
		rel="noopener noreferrer"
		className="resource-card-link sb-unstyled">
		<DBCard
			behavior="interactive"
			className="resource-card-item sb-unstyled">
			<img src={resource.icon} alt="" width="32" height="32" />
			<div className="resource-text sb-unstyled">
				<strong className="resource-title sb-unstyled">
					{resource.title}
				</strong>
				<p>{resource.description}</p>
			</div>
			<strong
				className="resource-link-label sb-unstyled"
				data-icon-trailing="arrow_up_right">
				{resource.label}
			</strong>
		</DBCard>
	</a>
);

/** @public Card linking the Design System Platform, used in index.mdx. */
export const PlatformCard = () => (
	<div className="resource-cards">
		<ResourceCard resource={PLATFORM} />
	</div>
);

const ResourceCards = () => (
	<div className="resource-cards">
		{RESOURCES.map((resource) => (
			<ResourceCard key={resource.title} resource={resource} />
		))}
	</div>
);

export default ResourceCards;
