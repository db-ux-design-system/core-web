import {
	onMount,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import { DBShellProps, DBShellState } from './model';

useMetadata({});
useDefaultProps<DBShellProps>({});

export default function DBShell(props: DBShellProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBShellState>({
		fontsLoaded: false
	});

	onMount(() => {
		state.fontsLoaded = !props.fadeIn;

		if (document && props.fadeIn) {
			document.fonts.ready.then(() => {
				state.fontsLoaded = true;
			});
		} else {
			state.fontsLoaded = true;
		}
	});

	// jscpd:ignore-end

	return (
		<div
			ref={_ref}
			id={props.id}
			class={cls('db-shell', props.className)}
			data-control-panel-desktop-position={
				props.controlPanelDesktopPosition ?? 'top'
			}
			data-control-panel-mobile-position={
				props.controlPanelMobilePosition ?? 'top'
			}
			data-sub-navigation-desktop-position={
				props.subNavigationDesktopPosition ?? 'top'
			}
			data-sub-navigation-mobile-position={
				props.subNavigationMobilePosition ?? 'top'
			}
			data-show-sub-navigation={getBooleanAsString(
				props.showSubNavigation
			)}
			data-fade-in={getBooleanAsString(props.fadeIn)}
			data-fonts-loaded={getBooleanAsString(state.fontsLoaded)}>
			<Slot name="controlPanelDesktop" />
			<Slot name="controlPanelMobile" />
			<Slot name="subNavigation" />
			<main class={cls('db-main', props.mainClass)}>
				{props.children}
			</main>
		</div>
	);
}
