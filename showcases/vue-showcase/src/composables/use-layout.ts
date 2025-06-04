import { useRoute, useRouter } from 'vue-router';
import { computed, ref, watch } from 'vue';
import { COLOR_CONST, DENSITY, DENSITY_CONST, SEMANTIC } from '@components';
import {
	getSortedNavigationItems,
	navigationItems
} from '../utils/navigation-items';
import { defaultSettings } from '../../../shared/default-component-data';

export const useLayout = () => {
	const router = useRouter();
	const route = useRoute();
	const density = ref(DENSITY.REGULAR);
	const color = ref(SEMANTIC.NEUTRAL);
	const settings = ref(defaultSettings);
	const page = ref();
	const fullscreen = ref();

	const classNames = computed(
		() => `db-density-${density.value} db-color-${color.value}`
	);

	const onChange = async (event: any, target?: string) => {
		if (target === 'density') {
			density.value = event.target.value;
		} else if (target === 'color') {
			color.value = event.target.value;
		} else if (target === 'settings') {
			settings.value = event;
		}

		await router.push({
			path: route.path,
			query: {
				...route.query,
				[DENSITY_CONST]: density.value,
				[COLOR_CONST]: color.value,
				settings: JSON.stringify(settings.value)
			}
		});
	};

	watch(
		() => route.query,
		async (query: any) => {
			if (query[COLOR_CONST] && query[COLOR_CONST] !== color.value) {
				color.value = query[COLOR_CONST];
			}

			if (
				query[DENSITY_CONST] &&
				query[DENSITY_CONST] !== density.value
			) {
				density.value = query[DENSITY_CONST];
			}

			if (query.page) {
				page.value = query.page;
			}

			if (query.fullscreen) {
				page.value = query.fullscreen;
			}

			if (query.settings && JSON.stringify(settings.value) !== query.settings) {
				settings.value = JSON.parse(query.settings);
			}
		},
		{ immediate: true }
	);

	const sortedNavigation = getSortedNavigationItems(navigationItems);

	return {
		page,
		fullscreen,
		density,
		color,
		classNames,
		onChange,
		sortedNavigation,
		settings
	};
};
