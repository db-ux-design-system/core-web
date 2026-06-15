import {
	onInit,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DEFAULT_COLLAPSE, DEFAULT_EXPAND } from '../../shared/constants';
import { cls, getBoolean, getBooleanAsString, uuid } from '../../utils';
import { handleSubNavigationPosition } from '../../utils/navigation';
import DBButton from '../button/button.lite';
import DBTooltip from '../tooltip/tooltip.lite';
import {
	DBControlPanelDesktopProps,
	DBControlPanelDesktopState
} from './model';

useMetadata({});

useDefaultProps<DBControlPanelDesktopProps>({});

export default function DBControlPanelDesktop(
	props: DBControlPanelDesktopProps
) {
	const _ref = useRef<HTMLDivElement | any>(null);
	const _scrollContainerRef = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBControlPanelDesktopState>({
		_id: `db-control-panel-desktop-${uuid()}`,
		_open: true,
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		handleToggle: (event: any) => {
			if (typeof event.detail !== 'object') {
				event.stopPropagation();

				state._open = !state._open;
			}
		},
		getToggleButtonText: (): string => {
			if (props.onExpandButtonTooltipFn) {
				const open = state._open;
				return props.onExpandButtonTooltipFn(open);
			}
			if (props.expandButtonTooltip) {
				return props.expandButtonTooltip;
			}

			return state._open ? DEFAULT_COLLAPSE : DEFAULT_EXPAND;
		},
		onScroll() {
			if (!_scrollContainerRef) return;
			const popoverNavigation: HTMLElement | null = (
				_scrollContainerRef as HTMLDivElement
			).querySelector('.db-navigation[data-variant="popover"]');

			if (!popoverNavigation) return;

			const navigationMenu = popoverNavigation.querySelector('menu');

			if (navigationMenu) {
				handleSubNavigationPosition(navigationMenu);
			}
		}
	});

	// jscpd:ignore-end

	onInit(() => {
		if (props.expanded !== undefined) {
			state._open = getBoolean(props.expanded, 'expanded') ?? true;
		}
	});

	return (
		<header
			ref={_ref}
			class={cls('db-control-panel-desktop', props.className)}
			id={props.id ?? state._id}
			data-width={props.width}
			data-orientation={props.orientation}
			data-open={getBooleanAsString(state._open)}>
			<Slot name="brand" />
			<div
				ref={_scrollContainerRef}
				class="db-control-panel-desktop-scroll-container"
				onScroll={() => state.onScroll()}>
				{props.children}
				<Slot name="metaNavigation" />
			</div>
			<Slot name="primaryActions" />
			<Slot name="secondaryActions" />
			<div className="db-control-panel-desktop-button">
				<DBButton
					onClick={(event) => state.handleToggle(event)}
					variant="ghost"
					aria-controls={props.id ?? state._id}
					aria-expanded={state._open}
					noText
					type="button"
					icon="double_chevron_left">
					<DBTooltip variant="label" placement="right">
						{state.getToggleButtonText()}
					</DBTooltip>
				</DBButton>
			</div>
		</header>
	);
}
