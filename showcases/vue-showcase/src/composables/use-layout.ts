import { COLOR_CONST, DENSITY, DENSITY_CONST, SEMANTIC } from '@components';
import { computed, ref, watch } from 'vue';
import {
	type LocationQuery,
	type LocationQueryValue,
	useRoute,
	useRouter
} from 'vue-router';
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
	const drawerOpen = ref(false);

	const toggleDrawer = (isOpen: boolean) => {
		drawerOpen.value = isOpen;
	};
	// TODO: Remove shell state and `showcases/vue-showcase/src/page` folder after v6.0.0
	const shell = ref<boolean>(true);

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

				case 'shell': {
					shell.value = !shell.value;

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
				shell: String(shell.value),
				settings: JSON.stringify(settings.value)
			}
		});
	};

	watch(
		() => route.query,
		async (query: LocationQuery) => {
			// LocationQuery values are `string | null | (string | null)[]`.
			// These params are always written as single strings (see `onChange`),
			// so collapse any array to its last entry (last value wins).
			const single = (
				value: LocationQueryValue | LocationQueryValue[]
			): string | undefined => {
				const resolved = Array.isArray(value) ? value.at(-1) : value;
				return resolved ?? undefined;
			};

			const nextColor = single(query[COLOR_CONST]);
			const nextDensity = single(query[DENSITY_CONST]);
			const nextSettings = single(query.settings);

			if (nextColor && nextColor !== color.value) {
				color.value = nextColor;
			}

			if (nextDensity && nextDensity !== density.value) {
				density.value = nextDensity;
			}

			if (query.page) {
				page.value = single(query.page);
			}

			if (query.fullscreen) {
				fullscreen.value = single(query.fullscreen);
			}

			if (query.shell !== undefined) {
				shell.value = single(query.shell) === 'true';
			}

			if (
				nextSettings &&
				JSON.stringify(settings.value) !== nextSettings
			) {
				try {
					settings.value = JSON.parse(nextSettings);
				} catch {
					// Ignore malformed settings JSON in URL
				}
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
		shell,
		classNames,
		onChange,
		sortedNavigation,
		settings
	};
};
