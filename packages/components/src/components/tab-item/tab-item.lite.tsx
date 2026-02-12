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
		_observer: null,
		_resizeObserver: null,
		handleClick: (event: any) => {
			if (event && event.preventDefault) {
				event.preventDefault();
			}

			if (!getBoolean(props.disabled)) {
				state.internalActive = true;
				if (props.onClick) {
					props.onClick(event);
				}
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

				if (truncated && !props.label) {
					state.tooltipText =
						_labelRef.innerText || _labelRef.textContent || '';
				} else if (props.label) {
					state.tooltipText = props.label || '';
				}
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
			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					if (mutation.attributeName === 'aria-selected') {
						const isSelected =
							_ref?.getAttribute('aria-selected') === 'true';
						// sync internal state if the DOM attribute is changed externally
						if (state.internalActive !== isSelected) {
							state.internalActive = isSelected;
						}
					}
				});
			});

			observer.observe(_ref, {
				attributes: true,
				attributeFilter: ['aria-selected']
			});
			state._observer = observer;

			_ref.addEventListener('aria-selected-changed', (event: any) => {
				state.internalActive = event.detail.selected;
			});
		}
	});

	// Disconnect the observer
	onUnMount(() => {
		state._observer?.disconnect();
		state._resizeObserver?.disconnect();
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
			const isActive =
				props.active !== undefined
					? getBoolean(props.active)
					: state.internalActive;
			const ariaSelected = isActive ? 'true' : 'false';

			if (_ref?.getAttribute('aria-selected') !== ariaSelected) {
				_ref?.setAttribute('aria-selected', ariaSelected);
			}

			const tabIndexStr =
				props.tabIndex !== undefined
					? String(props.tabIndex)
					: isActive
						? '0'
						: '-1';

			if (_ref?.getAttribute('tabindex') !== tabIndexStr) {
				_ref?.setAttribute('tabindex', tabIndexStr);
			}

			const isDisabled = getBoolean(props.disabled);
			const disabledStr = isDisabled ? 'true' : 'false';

			if (_ref?.getAttribute('aria-disabled') !== disabledStr) {
				_ref?.setAttribute('aria-disabled', disabledStr);
			}

			if (isDisabled) {
				if (!_ref?.hasAttribute('disabled')) {
					_ref?.setAttribute('disabled', '');
				}
			} else {
				if (_ref?.hasAttribute('disabled')) {
					_ref?.removeAttribute('disabled');
				}
			}
		}
	}, [state.internalActive, props.disabled, props.tabIndex, props.active]);

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
				<span ref={_labelRef} class="db-tab-label">
					<Show when={props.label}>{props.label}</Show>
					<Show when={!props.label}>
						<Slot />
					</Show>
				</span>
			</Show>
			<Show when={state.isTruncated && state.tooltipText}>
				<DBTooltip placement="right">{state.tooltipText}</DBTooltip>
			</Show>
		</button>
	);
}
