import {
	onMount,
	onUnMount,
	onUpdate,
	Show,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBoolean } from '../../utils';
import DBTooltip from '../tooltip/tooltip.lite';
import type { DBTabItemProps, DBTabItemState } from './model';

useMetadata({
	angular: {
		nativeAttributes: ['disabled', 'tabindex'],
		signals: {
			writeable: ['disabled']
		}
	}
});

useDefaultProps<DBTabItemProps>({});

export default function DBTabItem(props: DBTabItemProps) {
	const _ref = useRef<HTMLButtonElement | null>(null);
	const _labelRef = useRef<HTMLSpanElement | null>(null);

	const state = useStore<DBTabItemState>({
		initialized: false,
		internalActive: getBoolean(props.active) || false,
		isTruncated: false,
		tooltipText: '',
		_resizeObserver: null,
		_ariaSelectedListener: null,
		handleClick: (event: any) => {
			if (event && event.preventDefault) {
				event.preventDefault();
			}

			if (!getBoolean(props.disabled) && props.onClick) {
				props.onClick(event);
			}
		},
		checkTruncation: () => {
			if (_labelRef) {
				const scrollWidth = Math.ceil(_labelRef.scrollWidth);
				const clientWidth = Math.ceil(_labelRef.clientWidth);
				const truncated = scrollWidth > clientWidth + 1;

				if (state.isTruncated !== truncated) {
					state.isTruncated = truncated;
				}

				state.tooltipText = truncated
					? props.label || _labelRef.innerText || _labelRef.textContent || ''
					: '';
			}
		}
	});

	onMount(() => {
		state.internalActive = getBoolean(props.active) || false;

		if (typeof window !== 'undefined') {
			requestAnimationFrame(() => {
				state.checkTruncation();
			});
		}

		if (_labelRef) {
			const resizeObserver = new ResizeObserver(() => {
				requestAnimationFrame(() => {
					state.checkTruncation();
				});
			});
			resizeObserver.observe(_labelRef);
			state._resizeObserver = resizeObserver;
		}

		if (_ref) {
			const listener = (event: any) => {
				state.internalActive = event.detail.selected;
			};
			state._ariaSelectedListener = { fn: listener };
			_ref.addEventListener('aria-selected-changed', listener);
		}
	});

	// Disconnect the observer
	onUnMount(() => {
		state._resizeObserver?.disconnect();
		if (_ref && state._ariaSelectedListener) {
			_ref.removeEventListener('aria-selected-changed', state._ariaSelectedListener.fn);
		}
	});

	// Update internal active state when the active prop changes
	onUpdate(() => {
		if (props.active !== undefined) {
			state.internalActive = getBoolean(props.active) || false;
		}
	}, [props.active]);

	// Manually sync DOM attributes
	onUpdate(() => {
		if (_ref) {
			const isDisabled = getBoolean(props.disabled);
			const disabledStr = isDisabled ? 'true' : 'false';

			if (_ref?.getAttribute('aria-disabled') !== disabledStr) {
				_ref?.setAttribute('aria-disabled', disabledStr);
			}
		}
	}, [props.disabled]);

	return (
		<button
			ref={_ref}
			type="button"
			role="tab"
			class={cls('db-tab-item', props.className)}
			// suppresses native browser tooltips inherited from parent elements
			title=""
			aria-label={getBoolean(props.noText) ? props.label : undefined}
			aria-selected={
				(
					props.active !== undefined
						? getBoolean(props.active)
						: state.internalActive
				)
					? 'true'
					: 'false'
			}
			aria-controls={props.ariaControls}
			disabled={getBoolean(props.disabled) ? true : undefined}
			tabIndex={+(props.tabIndex ?? (state.internalActive ? 0 : -1))}
			id={props.id}
			data-active={
				props.active !== undefined
					? getBoolean(props.active)
					: state.internalActive
			}
			data-icon={props.showIcon ? props.icon : undefined}
			data-icon-after={
				props.showIconTrailing ? props.iconTrailing : undefined
			}
			onClick={(event) => state.handleClick(event)}>
			<Show when={!props.noText}>
				{/* wrapper needed for accurate width measurement via refs */}
				<span ref={_labelRef} class="db-tab-label" title="">
					<Show when={props.label}>{props.label}</Show>
					<Show when={!props.label}>
						<Slot />
					</Show>
				</span>
			</Show>
			<Show when={state.isTruncated && state.tooltipText}>
				<DBTooltip placement="bottom">{state.tooltipText}</DBTooltip>
			</Show>
		</button>
	);
}
