import { computed, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
	COLOR,
	COLOR_CONST,
	DENSITY,
	DENSITY_CONST
} from '../../../../packages/components/src/shared/constants';
import {
	getSortedNavigationItems,
	navigationItems
} from '../utils/navigation-items';

export const useLayout = () => {
	const router = useRouter();
	const route = useRoute();
	const density = ref(DENSITY.REGULAR);
	const color = ref(COLOR.NEUTRAL_BG_LEVEL_1);
	const page = ref();
	const fullscreen = ref();
	const drawerOpen = ref(false);

	const toggleDrawer = (open: boolean) => {
		drawerOpen.value = open;
	};

	const classNames = computed(
		() => `db-density-${density.value} db-${color.value}`
	);

	const onChange = async (event: any, target?: string) => {
		if (target === 'density') {
			density.value = event.target.value;
		} else if (target === 'color') {
			color.value = event.target.value;
		}

		await router.push({
			path: route.path,
			query: {
				...route.query,
				[DENSITY_CONST]: density.value,
				[COLOR_CONST]: color.value
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
		},
		{ immediate: true }
	);

	const sortedNavigation = getSortedNavigationItems(navigationItems);

	return {
		page,
		fullscreen,
		density,
		color,
		drawerOpen,
		classNames,
		onChange,
		toggleDrawer,
		sortedNavigation
	};
};
