import { COLOR_CONST, DENSITY, DENSITY_CONST, SEMANTIC } from '@components';
import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
	type ColoringMode,
	COLORING_MODES,
	defaultColoringMode,
	defaultSettings
} from '../../../settings';
import {
	getSortedNavigationItems,
	navigationItems
} from '../utils/navigation-items';

const isColoringMode = (value: string): value is ColoringMode =>
	(COLORING_MODES as readonly string[]).includes(value);

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
	const coloringMode = ref<ColoringMode>(defaultColoringMode);

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

				case 'coloring': {
					coloringMode.value = inputEvent.target
						.value as ColoringMode;

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
				coloring: coloringMode.value,
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
				fullscreen.value = query.fullscreen;
			}

			if (query.shell !== undefined) {
				shell.value = query.shell === 'true';
			}

			if (
				query.coloring &&
				isColoringMode(query.coloring) &&
				coloringMode.value !== query.coloring
			) {
				coloringMode.value = query.coloring;
			}

			if (
				query.settings &&
				JSON.stringify(settings.value) !== query.settings
			) {
				try {
					settings.value = JSON.parse(query.settings);
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
		coloringMode,
		classNames,
		onChange,
		sortedNavigation,
		settings
	};
};
