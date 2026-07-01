import { COLOR_CONST, DENSITY, DENSITY_CONST, SEMANTIC } from '@components';
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { defaultSettings } from '../../../settings';
import {
	getSortedNavigationItems,
	navigationItems
} from '../utils/navigation-items';

export const useLayout = () => {
	const router = useRouter();
	const route = useRoute();
	const density = ref<string>(DENSITY.REGULAR);
	const color = ref<string>(SEMANTIC.NEUTRAL);
	const settings = ref<any>(defaultSettings);
	const page = ref();
	const fullscreen = ref();

	const classNames = computed(
		() => `db-density-${density.value} db-color-${color.value}`
	);

	const onChange = async (event: Event, target?: string) => {
		const inputEvent = event as Event & { target: HTMLInputElement };
		if (target) {
			switch (target) {
				case 'density': {
					density.value = inputEvent.target.value;

					break;
				}

				case 'color': {
					color.value = inputEvent.target.value;

					break;
				}

				case 'settings': {
					settings.value = event;

					break;
				}
				// No default
			}
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
		async (query: Record<string, string>) => {
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

			if (
				query.settings &&
				JSON.stringify(settings.value) !== query.settings
			) {
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
