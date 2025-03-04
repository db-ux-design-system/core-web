/**
 *
 * @type {[{ name: string, componentUrl: string, url: string}]}
 */
export const designSystems = [
	{
		name: 'Telekom Scale',
		url: 'https://github.com/telekom/scale',
		componentUrl: 'https://telekom.github.io/scale/?path=/docs/components'
	},
	{
		name: 'SBB Lyne',
		url: 'https://github.com/lyne-design-system/lyne-components',
		componentUrl:
			'https://lyne-storybook.app.sbb.ch/?path=/docs/pages-home--docs'
	},
	{
		name: 'SNCF Design System',
		url: 'https://gitlab.com/SNCF/wcs',
		componentUrl:
			'https://designmetier-bootstrap.sncf.fr/docs/4.3/components/alerts/'
	},
	{
		name: 'IBM Carbon',
		url: 'https://github.com/carbon-design-system/carbon',
		componentUrl: 'https://carbondesignsystem.com/components/overview/'
	},
	{
		name: 'Material UI',
		url: 'https://github.com/mui/material-ui',
		componentUrl: 'https://mui.com/material-ui/react-button/'
	},
	{
		name: 'Porsche Design System',
		url: 'https://github.com/porsche-design-system/porsche-design-system',
		componentUrl:
			'https://designsystem.porsche.com/v3/components/introduction'
	},
	{
		name: 'Washington Post Design System',
		url: 'https://build.washingtonpost.com/',
		componentUrl: 'https://build.washingtonpost.com/components/accordion'
	},
	{
		name: 'HP Enterprise Grommet',
		url: 'https://github.com/grommet/grommet',
		componentUrl: 'https://v2.grommet.io/components'
	},
	{
		name: 'Shopify Polaris',
		url: 'https://github.com/Shopify/polaris',
		componentUrl: 'https://polaris.shopify.com/components/'
	},
	{
		name: 'Atlassian Design System',
		url: 'https://bitbucket.org/atlassian/atlaskit/src/master/',
		componentUrl: 'https://atlassian.design/components/'
	},
	{
		name: 'GitHub Primer',
		url: 'https://github.com/primer/css',
		componentUrl: 'https://primer.style/design/components/'
	},
	{
		name: 'MongoDB.design',
		url: 'https://github.com/mongodb/design',
		componentUrl: 'https://www.mongodb.design/component/button/example/'
	},
	{
		name: 'GitLab Pajamas',
		url: 'https://gitlab.com/gitlab-org/gitlab-services/design.gitlab.com',
		componentUrl: 'https://design.gitlab.com/components/overview'
	},
	{
		name: 'Telefonica Mistica',
		url: 'https://github.com/Telefonica/mistica-web',
		componentUrl:
			'https://brandfactory.telefonica.com/d/iSp7b1DkYygv/n-a#/components/overview'
	},
	{
		name: 'Bootstrap',
		url: 'https://github.com/twbs/bootstrap',
		componentUrl: 'https://getbootstrap.com/docs/4.3/components/alerts/'
	}
].sort((a, b) => {
	const nameA = a.name.toUpperCase(); // ignore upper and lowercase
	const nameB = b.name.toUpperCase(); // ignore upper and lowercase
	if (nameA < nameB) {
		return -1;
	}

	if (nameA > nameB) {
		return 1;
	}

	return 0;
});

export default designSystems;
