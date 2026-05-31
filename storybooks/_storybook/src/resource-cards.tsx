import { DBCard } from '@components';

declare const __FRAMEWORK_URLS__: {
	angular: string;
	react: string;
	vue: string;
};

const RESOURCES = [
	{
		title: 'Angular',
		description: 'Native Angular components',
		url: `${__FRAMEWORK_URLS__.angular}/?path=/docs/getting-started--docs`,
		icon: 'angular.svg',
		label: 'View Storybook'
	},
	{
		title: 'React',
		description: 'Native React components',
		url: `${__FRAMEWORK_URLS__.react}/?path=/docs/getting-started--docs`,
		icon: 'react.svg',
		label: 'View Storybook'
	},
	{
		title: 'Vue',
		description: 'Native Vue 3 components',
		url: `${__FRAMEWORK_URLS__.vue}/?path=/docs/getting-started--docs`,
		icon: 'vue.svg',
		label: 'View Storybook'
	}
];

const getIconPath = (icon: string) => `./framework-icons/${icon}`;

const ResourceCards = () => (
	<div className="resource-cards">
		{RESOURCES.map((resource) => {
			const cardContent = (
				<>
					{resource.icon && (
						<img
							src={getIconPath(resource.icon)}
							alt={`Image for ${resource.title}, ${resource.description}`}
							width="32"
							height="32"
						/>
					)}
					<div className="resource-text sb-unstyled">
						<strong className="resource-title sb-unstyled">
							{resource.title}
						</strong>
						<p>{resource.description}</p>
					</div>
				</>
			);
			return (
				<a
					key={resource.title}
					href={resource.url}
					target="_blank"
					rel="noopener noreferrer"
					className="resource-card-link sb-unstyled">
					<DBCard
						behavior="interactive"
						className="resource-card-item sb-unstyled">
						{cardContent}
						<strong
							className="resource-link-label sb-unstyled"
							data-icon-trailing="arrow_up_right">
							{resource.label || 'View Storybook'}
						</strong>
					</DBCard>
				</a>
			);
		})}
	</div>
);

export default ResourceCards;
