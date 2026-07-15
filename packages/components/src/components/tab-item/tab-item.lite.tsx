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
		_mutationObserver: null,
		_setupRafId: null,
		_unmounted: false,
		// Removes only the truncation tooltip ID from aria-describedby,
		// preserving any consumer-provided IDs in the space-separated list.
		_cleanupTooltipAria: () => {
			if (!_ref) return;
			if (!_ref.hasAttribute('data-has-tooltip')) return;

			_ref.removeAttribute('data-has-tooltip');

			const tooltipEl = _ref.querySelector('.db-tooltip');
			if (!tooltipEl || !tooltipEl.id) return;

			const describedBy = _ref.getAttribute('aria-describedby') || '';
			const remaining = describedBy
				.split(' ')
				.filter((id: string) => id !== '' && id !== tooltipEl.id)
				.join(' ');

			if (remaining) {
				_ref.setAttribute('aria-describedby', remaining);
			} else {
				_ref.removeAttribute('aria-describedby');
			}
		},
		checkTruncation: () => {
			if (_labelRef) {
				const scrollWidth = Math.ceil(_labelRef.scrollWidth);
				const clientWidth = Math.ceil(_labelRef.clientWidth);
				const truncated = scrollWidth > clientWidth + 1;

				if (state.isTruncated !== truncated) {
					state.isTruncated = truncated;

					if (!truncated) {
						state._cleanupTooltipAria();
						// Remove the empty title we set to suppress native
						// tooltip; consumer-provided titles are re-applied by
						// the framework spread on the next render.
						if (_ref && _ref.getAttribute('title') === '') {
							_ref.removeAttribute('title');
						}
					} else if (_ref) {
						// Suppress native browser tooltip while our custom
						// truncation tooltip is active.
						_ref.setAttribute('title', '');
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
				state._setupRafId = requestAnimationFrame(() => {
					state._setupRafId = null;
					if (state._unmounted) return;
					state.checkTruncation();
					if (_labelRef && !state._resizeObserver) {
						const resizeObserver = new ResizeObserver(() => {
							requestAnimationFrame(() => {
								if (!state._unmounted) {
									state.checkTruncation();
								}
							});
						});
						resizeObserver.observe(_labelRef);
						state._resizeObserver = resizeObserver;
					}
					// The ResizeObserver only reacts to box-size changes. When
					// slotted/children text changes in place (e.g. i18n or an
					// async badge count) the box can keep its size while
					// scrollWidth changes, so also observe content mutations.
					if (_labelRef && !state._mutationObserver) {
						const mutationObserver = new MutationObserver(() => {
							requestAnimationFrame(() => {
								if (!state._unmounted) {
									state.checkTruncation();
								}
							});
						});
						mutationObserver.observe(_labelRef, {
							childList: true,
							subtree: true,
							characterData: true
						});
						state._mutationObserver = mutationObserver;
					}
				});
			};
			const hasIcon = !!(
				props.iconLeading ??
				props.icon ??
				props.iconTrailing
			);
			if (hasIcon && document.fonts?.ready) {
				document.fonts.ready.then(() => {
					if (!state._unmounted) {
						setupObserverAndCheck();
					}
				});
			} else {
				setupObserverAndCheck();
			}
		}
	}, [_labelRef, state.initialized]);

	// Disconnect the observers
	onUnMount(() => {
		state._unmounted = true;
		const rafId = state._setupRafId;
		if (rafId !== null) {
			cancelAnimationFrame(rafId);
			state._setupRafId = null;
		}
		state._resizeObserver?.disconnect();
		state._mutationObserver?.disconnect();
	});

	// Re-check truncation when the label content changes. The ResizeObserver only
	// fires on box-size changes, not when the text content (and thus scrollWidth)
	// changes while the box stays the same size.
	onUpdate(() => {
		if (_labelRef && state.initialized) {
			state.checkTruncation();
		}
	}, [props.label]);

	// Manually sync DOM attributes when truncation state changes
	onUpdate(() => {
		if (_ref && !state.isTruncated) {
			state._cleanupTooltipAria();
		}
	}, [_ref, state.isTruncated]);

	return (
		<button
			ref={_ref}
			type="button"
			role="tab"
			class={cls('db-tab-item', props.className)}
			disabled={getBoolean(props.disabled, 'disabled') ? true : undefined}
			id={props.id}
			// Initial selection state rendered declaratively so SSR/no-JS output
			// and the first paint expose a selected tab.
			// When inside DBTabs this is kept in sync by initTabs/syncSelection.
			// Omitted when active is undefined (standalone usage stays focusable).
			aria-selected={getBooleanAsString(props.active, 'active')}
			// Mark the selected tab as the focusgroup entry point for browsers
			// that support focusgroup natively. syncSelection manages this at
			// runtime; this covers SSR/first-paint.
			focusgroupstart={
				getBoolean(props.active, 'active') ? '' : undefined
			}
			data-value={props.value}>
			{/* wrapper needed for accurate width measurement via refs */}
			<span
				class="db-tab-item-label"
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
				<span ref={_labelRef} class="db-tab-item-label-text">
					<Show when={props.label}>{props.label}</Show>
					{props.children}
				</span>
				<div class="db-tab-item-label-end-slot">{props.endSlot}</div>
			</span>
			<Show when={state.isTruncated && state.tooltipText}>
				<DBTooltip placement="bottom">{state.tooltipText}</DBTooltip>
			</Show>
		</button>
	);
}
