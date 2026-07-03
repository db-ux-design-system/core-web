import {
	onInit,
	onUpdate,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import { DEFAULT_COLLAPSE, DEFAULT_EXPAND } from '../../shared/constants';
import { cls, getBoolean, getBooleanAsString, uuid } from '../../utils';
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
		_id: undefined,
		_open: true,
		handleToggle: (event: any) => {
			/* Guard: In WC/Stencil, custom events wrap payload in event.detail as object.
			   Native click has event.detail as number. Prevents double-toggle. */
			if (typeof event.detail !== 'object') {
				event.stopPropagation();

				state._open = !state._open;
			}
		},
		getToggleButtonText: (): string => {
			if (props.expandButtonTooltip) {
				return props.expandButtonTooltip;
			}

			const fnOutput = useTarget({
				angular: () => undefined,
				stencil: () => undefined,
				default: () => {
					if (props.onExpandButtonTooltipFn) {
						const open = state._open;
						return props.onExpandButtonTooltipFn(open);
					}
				}
			});

			return (
				fnOutput() ?? (state._open ? DEFAULT_COLLAPSE : DEFAULT_EXPAND)
			);
		},
		resetIds: () => {
			state._id =
				props.id ??
				props.propOverrides?.id ??
				`db-control-panel-desktop-${uuid()}`;
		}
	});

	// jscpd:ignore-end

	onInit(() => {
		state.resetIds();
	});

	onUpdate(() => {
		state.resetIds();
	}, [props.id, props.propOverrides]);

	onUpdate(() => {
		if (props.expanded !== undefined) {
			state._open = getBoolean(props.expanded, 'expanded') ?? true;
		}
	}, [props.expanded]);

	return (
		<header
			ref={_ref}
			class={cls('db-control-panel-desktop', props.className)}
			id={state._id}
			data-width={props.width}
			data-orientation={props.orientation}
			data-open={getBooleanAsString(state._open)}>
			<Slot name="skipNavigation" />
			<div class="db-control-panel-desktop-brand-container">
				<Slot name="brand" />
			</div>
			<div
				ref={_scrollContainerRef}
				class="db-control-panel-desktop-scroll-container">
				{props.children}
				<Slot name="metaNavigation" />
			</div>
			<Slot name="primaryActions" />
			<Slot name="secondaryActions" />
			<div className="db-control-panel-desktop-button">
				<button
					onClick={(event) => state.handleToggle(event)}
					class="db-button"
					data-variant="ghost"
					aria-controls={state._id}
					aria-expanded={getBooleanAsString(state._open)}
					data-no-text="true"
					type="button"
					data-icon="double_chevron_left">
					<DBTooltip variant="label" placement="right">
						{state.getToggleButtonText()}
					</DBTooltip>
				</button>
			</div>
		</header>
	);
}
