import {
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useStore
} from '@builder.io/mitosis';
import { DBMainNavigationState, DBMainNavigationProps } from './model';
import classNames from 'classnames';
import { setMainMenuToFirstListElement, uuid } from '../../utils';
import { DBButton } from '../button';
import { DEFAULT_BACK } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: false,
		properties: []
	}
});

export default function DBMainNavigation(props: DBMainNavigationProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBMainNavigationState>({
		initialized: false,
		mainNavigationId: 'main-navigation-' + uuid(),
		getClassNames: (...args: classNames.ArgumentArray) => {
			return classNames(args);
		}
	});

	onMount(() => {
		state.initialized = true;
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	onUpdate(() => {
		if (state.initialized && document && state.mainNavigationId) {
			const menuElement = document?.getElementById(
				state.mainNavigationId
			) as HTMLMenuElement;
			if (menuElement) {
				setMainMenuToFirstListElement(menuElement);
			}
		}
	}, [state.initialized]);
	// jscpd:ignore-end

	return (
		<nav
			ref={component}
			class={state.getClassNames('db-main-navigation', props.className)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<menu id={state.mainNavigationId}>
				{props.children}
				<div class="db-mobile-navigation-back db-mobile-main-navigation-back">
					<DBButton
						id={props.backButtonId}
						icon="arrow-back"
						variant="text">
						{props.backButtonText ?? DEFAULT_BACK}
					</DBButton>
				</div>
			</menu>
		</nav>
	);
}
