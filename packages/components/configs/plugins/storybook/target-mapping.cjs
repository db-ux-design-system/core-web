/**
 * Maps framework targets to their corresponding Storybook library names
 */
const targetMapping = {
	react: {
		storyBookLib: 'react-vite'
	},
	angular: {
		storyBookLib: 'angular'
	},
	vue: {
		storyBookLib: 'vue3-vite'
	},
	stencil: {
		storyBookLib: 'web-components-vite'
	}
};

module.exports = { targetMapping };
