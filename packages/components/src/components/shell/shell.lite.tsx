import {
	onMount,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { MAIN_CONTENT_ID } from '../../shared/constants';
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
			<Show
				when={props.skipNavigationLinkText}
				else={props.skipNavigationLink}>
				<a
					className="db-shell-skip-navigation-link"
					href={`#${props.skipNavigationTarget ?? MAIN_CONTENT_ID}`}>
					{props.skipNavigationLinkText}
				</a>
			</Show>
			{props.children}
		</div>
	);
}
