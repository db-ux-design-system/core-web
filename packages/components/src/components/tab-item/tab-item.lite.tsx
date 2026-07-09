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
import { cls, getBoolean, getBooleanAsString } from '../../utils';
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
		isTruncated: false,
		tooltipText: '',
		_resizeObserver: null,
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
		state.initialized = true;
	});

	// Setup truncation check and resize observer once the label ref and
	// initialization are both available.
	onUpdate(() => {
		if (
			typeof window !== 'undefined' &&
			_labelRef &&
			state.initialized &&
			!state._resizeObserver
		) {
			const setupObserverAndCheck = () => {
				requestAnimationFrame(() => {
					state.checkTruncation();
					if (_labelRef && !state._resizeObserver) {
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
			const hasIcon = !!(
				props.iconLeading ??
				props.icon ??
				props.iconTrailing
			);
			if (hasIcon && document.fonts?.ready) {
				document.fonts.ready.then(setupObserverAndCheck);
			} else {
				setupObserverAndCheck();
			}
		}
	}, [_labelRef, state.initialized]);

	// Disconnect the observer
	onUnMount(() => {
		state._resizeObserver?.disconnect();
	});

	// Re-check truncation when the label content changes. The ResizeObserver only
	// fires on box-size changes, not when the text content (and thus scrollWidth)
	// changes while the box stays the same size.
	onUpdate(() => {
		if (_labelRef && state.initialized) {
			state.checkTruncation();
		}
	}, [props.label]);

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

	// Convenience: set aria-selected from active prop for standalone/example usage.
	// When inside DBTabs, this is immediately overridden by DBTabs' initTabs/syncSelection.
	onUpdate(() => {
		if (_ref && state.initialized && props.active !== undefined) {
			const isActive = getBoolean(props.active, 'active') || false;
			_ref.setAttribute('aria-selected', String(isActive));
			_ref.setAttribute('tabindex', isActive ? '0' : '-1');
		}
	}, [_ref, state.initialized, props.active]);

	return (
		<button
			ref={_ref}
			type="button"
			role="tab"
			class={cls('db-tab-item', props.className)}
			// Suppress native browser tooltip only when custom truncation tooltip is active
			title={state.isTruncated ? '' : undefined}
			disabled={getBoolean(props.disabled, 'disabled') ? true : undefined}
			id={props.id}
			data-value={props.value}>
			{/* wrapper needed for accurate width measurement via refs */}
			<span
				class="db-tab-label"
				data-icon={props.iconLeading ?? props.icon}
				data-show-icon={
					getBooleanAsString(
						props.showIconLeading,
						'showIconLeading'
					) || getBooleanAsString(props.showIcon, 'showIcon')
				}
				data-icon-trailing={props.iconTrailing}
				data-show-icon-trailing={getBooleanAsString(
					props.showIconTrailing,
					'showIconTrailing'
				)}>
				{/* only the text truncates – icons stay visible */}
				<span ref={_labelRef} class="db-tab-label-text">
					<Show when={props.label}>{props.label}</Show>
					{props.children}
				</span>
			</span>
			<Show when={state.isTruncated && state.tooltipText}>
				<DBTooltip placement="bottom">{state.tooltipText}</DBTooltip>
			</Show>
		</button>
	);
}
