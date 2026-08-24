import {
	onMount,
	onUpdate,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBoolean, getBooleanAsString } from '../../utils';
import { DBShellProps, DBShellState } from './model';

useMetadata({});
useDefaultProps<DBShellProps>({});

export default function DBShell(props: DBShellProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBShellState>({
		fontsLoaded: false,
		_controlPanelDesktopPosition: undefined,
		_controlPanelMobilePosition: undefined,
		_subNavigationDesktopPosition: undefined,
		_subNavigationMobilePosition: undefined
	});

	onMount(() => {
		const fadeIn = getBoolean(props.fadeIn, 'fadeIn');
		state.fontsLoaded = !fadeIn;

		if (document && fadeIn) {
			document.fonts?.ready
				?.then(() => {
					state.fontsLoaded = true;
				})
				.catch(() => {
					state.fontsLoaded = true;
				});
		} else {
			state.fontsLoaded = true;
		}
	});

	// jscpd:ignore-end

	onUpdate(() => {
		state._controlPanelDesktopPosition =
			props.controlPanelDesktopPosition ?? 'top';
	}, [props.controlPanelDesktopPosition]);

	onUpdate(() => {
		state._controlPanelMobilePosition =
			props.controlPanelMobilePosition ?? 'top';
	}, [props.controlPanelMobilePosition]);

	onUpdate(() => {
		state._subNavigationDesktopPosition =
			props.subNavigationDesktopPosition ?? 'top';
	}, [props.subNavigationDesktopPosition]);

	onUpdate(() => {
		state._subNavigationMobilePosition =
			props.subNavigationMobilePosition ?? 'top';
	}, [props.subNavigationMobilePosition]);

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-shell', props.className)}
			data-control-panel-desktop-position={
				state._controlPanelDesktopPosition
			}
			data-control-panel-mobile-position={
				state._controlPanelMobilePosition
			}
			data-sub-navigation-desktop-position={
				state._subNavigationDesktopPosition
			}
			data-sub-navigation-mobile-position={
				state._subNavigationMobilePosition
			}
			data-show-sub-navigation={getBooleanAsString(
				props.showSubNavigation,
				'showSubNavigation'
			)}
			data-fade-in={getBooleanAsString(props.fadeIn, 'fadeIn')}
			data-fonts-loaded={getBooleanAsString(state.fontsLoaded)}>
			{props.children}
		</div>
	);
}
