import {
	onMount,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBShellProps, DBShellState } from './model';
import { cls, getBooleanAsString, uuid } from '../../utils';
import DBButton from '../button/button.lite';
import DBTooltip from '../tooltip/tooltip.lite';

useMetadata({});
useDefaultProps<DBShellProps>({});

export default function DBShell(props: DBShellProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBShellState>({
		_id: `db-shell-${uuid()}`,
		fontsLoaded: false,
		_open: true,
		handleToggle: () => {
			state._open = !state._open;
		},
		getToggleButtonText: (): string => {
			return state._open
				? props.subNavigationToggleButtonCollapse ?? 'Collapse'
				: props.subNavigationToggleButtonExpand ?? 'Expand';
		}
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
			id={props.id ?? state._id}
			class={cls('db-shell', props.className)}
			data-open={state._open}
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
			data-fade-in={getBooleanAsString(props.fadeIn)}
			data-fonts-loaded={getBooleanAsString(state.fontsLoaded)}>
			<Slot name="controlPanelDesktop" />
			<Slot name="controlPanelMobile" />
			<div class="db-sub-navigation-container">
				<Slot name="subNavigation" />
				<div class="db-shell-sub-navigation-button">
					<DBButton
						onClick={(event) => state.handleToggle(event)}
						variant="ghost"
						aria-controls={props.id ?? state._id}
						aria-expanded={state._open}
						noText
						icon="chevron_left">
						<DBTooltip variant="label" placement="right">
							{state.getToggleButtonText()}
						</DBTooltip>
					</DBButton>
				</div>
			</div>
			<main class={cls('db-main', props.mainClass)}>
				{props.children}
			</main>
		</div>
	);
}
