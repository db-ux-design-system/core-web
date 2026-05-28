import {
	onMount,
	onUnMount,
	onUpdate,
	Show,
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
		internalActive: false,
		internalTabIndex: -1,
		getCurrentTabIndex(): number {
			return props.tabIndex !== undefined
				? Number(props.tabIndex)
				: state.internalTabIndex;
		},
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

					if (!truncated && _ref) {
						if (_ref.hasAttribute('data-has-tooltip')) {
							_ref.removeAttribute('data-has-tooltip');
						}
						if (_ref.hasAttribute('aria-describedby')) {
							_ref.removeAttribute('aria-describedby');
						}
					}
				}

				state.tooltipText = truncated
					? props.label ||
						_labelRef.innerText ||
						_labelRef.textContent ||
						''
					: '';
			}
		}
	});

	onMount(() => {
		state.internalActive = getBoolean(props.active) || false;
		state.internalTabIndex = getBoolean(props.active) ? 0 : -1;

		if (typeof window !== 'undefined') {
			const setupObserverAndCheck = () => {
				requestAnimationFrame(() => {
					state.checkTruncation();
					const labelEl = _labelRef;
					if (labelEl && !labelEl.dataset.label) {
						labelEl.dataset.label =
							props.label ||
							labelEl.innerText ||
							labelEl.textContent ||
							'';
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
				});
			};
			const hasIcon = props.showIcon && props.icon;
			if (hasIcon && document.fonts?.ready) {
				document.fonts.ready.then(setupObserverAndCheck);
			} else {
				setupObserverAndCheck();
			}
		}

		state.initialized = true;
	});

	// Register aria-selected-changed listener once ref is available
	onUpdate(() => {
		if (_ref && state.initialized && !state._ariaSelectedListener) {
			const listener = (event: any) => {
				state.internalActive = event.detail.selected;
				if (props.tabIndex === undefined) {
					if (event.detail.tabIndex !== undefined) {
						state.internalTabIndex = event.detail.tabIndex;
					} else {
						state.internalTabIndex = event.detail.selected ? 0 : -1;
					}
				}
			};
			state._ariaSelectedListener = { fn: listener };
			_ref.addEventListener('aria-selected-changed', listener);
		}
	}, [_ref, state.initialized]);

	// Disconnect the observer
	onUnMount(() => {
		state._resizeObserver?.disconnect();
		const _listener = state._ariaSelectedListener;
		if (_ref && _listener) {
			_ref.removeEventListener('aria-selected-changed', _listener.fn);
		}
	});

	// Update internal active state when the active prop changes
	onUpdate(() => {
		if (props.active !== undefined) {
			state.internalActive = getBoolean(props.active) || false;
			state.internalTabIndex = getBoolean(props.active) ? 0 : -1;
		}
	}, [props.active]);

	// Manually sync DOM attributes
	onUpdate(() => {
		if (_ref) {
			if (!state.isTruncated) {
				if (_ref.hasAttribute('data-has-tooltip')) {
					_ref.removeAttribute('data-has-tooltip');
				}
				if (_ref.hasAttribute('aria-describedby')) {
					_ref.removeAttribute('aria-describedby');
				}
			}
		}
	}, [_ref, state.isTruncated]);

	return (
		<button
			ref={_ref}
			type="button"
			role="tab"
			class={cls('db-tab-item', props.className)}
			// suppresses native browser tooltips inherited from parent elements
			title=""
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
			tabIndex={state.getCurrentTabIndex()}
			id={props.id}
			data-active={
				props.active !== undefined
					? getBoolean(props.active)
					: state.internalActive
			}
			data-value={props.value}
			onClick={(event) => state.handleClick(event)}>
			{/* wrapper needed for accurate width measurement via refs */}
			<span
				ref={_labelRef}
				class="db-tab-label"
				title=""
				data-icon={
					getBoolean(props.showIconLeading ?? props.showIcon)
						? (props.iconLeading ?? props.icon)
						: undefined
				}
				data-icon-trailing={
					getBoolean(props.showIconTrailing)
						? props.iconTrailing
						: undefined
				}>
				<Show when={props.label}>{props.label}</Show>
				{props.children}
			</span>
			<Show when={state.isTruncated && state.tooltipText}>
				<DBTooltip placement="right">{state.tooltipText}</DBTooltip>
			</Show>
		</button>
	);
}
