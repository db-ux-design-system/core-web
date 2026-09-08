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
import {
	DEFAULT_ID,
	DEFAULT_LABEL_ID_SUFFIX,
	DEFAULT_LOADING_TIMEOUT,
	DEFAULT_LOADING_TIMEOUT_ACTIVE,
	DEFAULT_PROGRESS_ID_SUFFIX
} from '../../shared/constants';
import {
	cls,
	getBoolean,
	getBooleanAsString,
	getHideProp,
	getNotificationRole,
	uuid
} from '../../utils';
import { DBLoadingIndicatorProps, DBLoadingIndicatorState } from './model';

useMetadata({});

useDefaultProps<DBLoadingIndicatorProps>({
	indeterminate: true,
	variant: 'circular',
	orientation: 'horizontal',
	size: 'medium',
	autoDisable: true
});

export default function DBLoadingIndicator(props: DBLoadingIndicatorProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBLoadingIndicatorState>({
		_id: DEFAULT_ID,
		_labelId: undefined,
		_progressId: undefined,
		_loadingState: 'inactive',
		_previousLoadingState: undefined,
		_timeoutId: undefined,
		_didDisableParent: false,
		_segmentStyle: {},
		initialized: false,
		resetIds: () => {
			const mId =
				props.id ||
				props.propOverrides?.id ||
				'loading-indicator-' + uuid();
			state._id = mId;
			state._labelId = mId + DEFAULT_LABEL_ID_SUFFIX;
			state._progressId = mId + DEFAULT_PROGRESS_ID_SUFFIX;
		},
		getPercentage: () => {
			if (
				getBoolean(props.indeterminate) ||
				props.value === undefined ||
				props.value === null ||
				props.max === undefined ||
				props.max === null
			) {
				return;
			}

			const value = Number(props.value);
			const max = Number(props.max);

			// Guard against non-numeric props (e.g. Number("abc") -> NaN) and a
			// zero/negative max, which would otherwise produce "NaN" and render
			// as an invalid calc() that falls back to a full bar.
			if (Number.isNaN(value) || Number.isNaN(max) || max <= 0) {
				return;
			}

			return `${Math.min(Math.max(value / max, 0), 1).toFixed(2)}`;
		},
		getRole: () => {
			if (props.role) {
				return props.role;
			}

			// Map the live-region role from the state so a critical result is
			// announced assertively (alert) instead of politely (status),
			// reusing the same semantic->role mapping as DBNotification.
			// active/inactive/successful stay a polite "status" region.
			return getNotificationRole({
				semantic:
					state._loadingState === 'critical'
						? 'critical'
						: 'successful'
			});
		},
		handleParentDisabled: (forceEnable?: boolean) => {
			if (_ref && getBoolean(props.autoDisable) && state.initialized) {
				let parent = (_ref as HTMLDivElement).parentElement;
				if (parent && parent.localName === 'db-loading-indicator') {
					parent = parent.parentElement;
				}

				if (parent && 'disabled' in parent) {
					if (
						!forceEnable &&
						state._loadingState !== 'inactive' &&
						!parent.disabled
					) {
						state._didDisableParent = true;
						// Mirror the flag onto the DOM so the unmount cleanup
						// can read it from the live _ref (state is stale in the
						// React unmount closure).
						(_ref as HTMLDivElement).dataset.didDisableParent =
							'true';
						parent.disabled = true;
					}

					if (
						(forceEnable || state._loadingState === 'inactive') &&
						state._didDisableParent
					) {
						state._didDisableParent = false;
						(_ref as HTMLDivElement).dataset.didDisableParent =
							'false';
						parent.disabled = false;
					}
				}
			}
		},
		handleParentAria: (remove: boolean) => {
			if (_ref && state._id && state.initialized) {
				let parent = (_ref as HTMLDivElement).parentElement;
				if (parent && parent.localName === 'db-loading-indicator') {
					parent = parent.parentElement;
				}

				if (!parent) return;

				const isButton = parent?.localName === 'button';

				if (!(isButton || props.overlay)) return;

				// Always use aria-describedby (never aria-labelledby): on a
				// button aria-labelledby would replace the accessible name, so
				// the button would announce "Loading" instead of its own label
				// (WCAG 4.1.2 / 2.5.3). As a description the loading state is
				// added to, not substituted for, the visible label.
				const ariaAttribute = 'aria-describedby';

				const ariaDescribedBy = parent.getAttribute(ariaAttribute);
				let describedByElements = ariaDescribedBy
					? ariaDescribedBy.split(' ')
					: [];
				if (remove || state._loadingState === 'inactive') {
					if (describedByElements.includes(state._id!)) {
						describedByElements = describedByElements.filter(
							(elementId) => elementId !== state._id
						);

						parent.ariaBusy = null;
					} else {
						return;
					}
				} else {
					if (!describedByElements.includes(state._id!)) {
						describedByElements.push(state._id!);
					}

					parent.ariaBusy =
						state._loadingState === 'active' ? 'true' : null;
				}

				if (describedByElements.length) {
					parent.setAttribute(
						ariaAttribute,
						describedByElements.join(' ')
					);
				} else {
					parent.removeAttribute(ariaAttribute);
				}
			}
		},
		// Runs on unmount. Mitosis compiles onUnMount to a React
		// useEffect(() => cleanup, []) whose closure captures the first-render
		// state (initialized: false, _timeoutId/_didDisableParent unset), so
		// the normal handlers would all bail out and never restore the parent.
		// This cleanup therefore reads everything from the live _ref/DOM
		// instead of from captured state.
		handleUnmount: () => {
			if (!_ref) return;

			const root = _ref as HTMLDivElement;

			// Read the timer handle from the DOM (state._timeoutId is stale in
			// the React unmount closure) so a pending onTimeout never fires
			// after the component is gone.
			const pendingTimeoutId = root.dataset.timeoutId;
			if (pendingTimeoutId) {
				clearTimeout(Number(pendingTimeoutId));
				delete root.dataset.timeoutId;
			}

			const rootId = root.id;

			let parent = root.parentElement;
			if (parent && parent.localName === 'db-loading-indicator') {
				parent = parent.parentElement;
			}

			if (!parent) return;

			// Restore aria-describedby / aria-busy on the parent.
			if (rootId) {
				const ariaDescribedBy = parent.getAttribute('aria-describedby');
				const describedByElements = ariaDescribedBy
					? ariaDescribedBy
							.split(' ')
							.filter((elementId) => elementId !== rootId)
					: [];

				if (describedByElements.length) {
					parent.setAttribute(
						'aria-describedby',
						describedByElements.join(' ')
					);
				} else {
					parent.removeAttribute('aria-describedby');
				}

				parent.ariaBusy = null;
			}

			// Re-enable the parent if this indicator disabled it. The marker
			// is read from the DOM so it survives the stale unmount closure.
			if (
				root.dataset.didDisableParent === 'true' &&
				'disabled' in parent
			) {
				parent.disabled = false;
			}
		}
	});

	// jscpd:ignore-end

	onMount(() => {
		state.resetIds();
		state.initialized = true;
	});

	onUpdate(() => {
		if (props.id) {
			state.resetIds();
		}
	}, [props.id]);

	onUpdate(() => {
		state.handleParentDisabled();
	}, [_ref, state.initialized, props.autoDisable, state._loadingState]);

	onUpdate(() => {
		state.handleParentAria(false);
	}, [
		_ref,
		state.initialized,
		state._loadingState,
		props.overlay,
		state._id
	]);

	onUpdate(() => {
		if (props.onTimeout) {
			if (state._loadingState === 'inactive') {
				// A cancelled load (active -> inactive) must not still fire the
				// timeout for a state the consumer already left, so clear any
				// running timer here as well.
				if (state._timeoutId) {
					clearTimeout(state._timeoutId);
					state._timeoutId = undefined;
				}

				state._previousLoadingState = 'inactive';
			}

			if (
				state._loadingState !== 'inactive' &&
				state._loadingState !== state._previousLoadingState
			) {
				state._previousLoadingState = state._loadingState;

				if (state._timeoutId) {
					clearTimeout(state._timeoutId);
				}

				const timeoutId = setTimeout(
					() => {
						state._timeoutId = undefined;
						if (_ref) {
							delete (_ref as HTMLDivElement).dataset.timeoutId;
						}

						if (props.onTimeout) {
							props.onTimeout(state._loadingState);
						}
					},
					state._loadingState === 'active'
						? Number(
								props.timeoutActive ??
									DEFAULT_LOADING_TIMEOUT_ACTIVE
							)
						: Number(props.timeout ?? DEFAULT_LOADING_TIMEOUT)
				);
				state._timeoutId = timeoutId;

				// Mirror the timer handle onto the DOM so the unmount cleanup
				// can clear it even though the React unmount closure captures a
				// stale (undefined) state._timeoutId.
				if (_ref) {
					(_ref as HTMLDivElement).dataset.timeoutId =
						`${Number(timeoutId)}`;
				}
			}
		}
	}, [state._loadingState, props.onTimeout]);

	onUpdate(() => {
		if (state._loadingState === props.state) return;

		if (props.state) {
			state._loadingState = props.state;
		} else if (
			props.indeterminate === undefined ||
			getBoolean(props.indeterminate)
		) {
			state._loadingState = 'active';
		} else {
			state._loadingState = 'inactive';
		}
	}, [props.state, props.indeterminate]);

	onUpdate(() => {
		if (_ref) {
			const loadingIndicator = _ref as HTMLElement;
			const percentage = state.getPercentage();
			state._segmentStyle = {
				'--db-loading-indicator-percentage': percentage
			};

			if (percentage === '1.00') {
				loadingIndicator.dataset['percentageFull'] = 'true';
			} else {
				delete loadingIndicator.dataset['percentageFull'];
			}
		}
	}, [props.indeterminate, props.value, props.max, _ref]);

	onUnMount(() => {
		state.handleUnmount();
	});

	return (
		<div
			ref={_ref}
			id={state._id}
			class={cls('db-loading-indicator', props.className)}
			data-indeterminate={getBooleanAsString(props.indeterminate)}
			data-size={props.size}
			data-variant={props.variant}
			data-width={props.width}
			data-orientation={props.orientation}
			data-delay={props.delay}
			data-state={state._loadingState}
			data-hide-label={getHideProp(props.showLabel)}
			data-overlay={getBooleanAsString(props.overlay)}>
			<Show when={props.variant === 'circular'}>
				<svg
					class="db-loading-indicator-circle"
					viewBox={
						props.orientation === 'vertical'
							? '32 32 64 64'
							: '10 10 20 20'
					}
					aria-hidden="true">
					<circle class="db-loading-indicator-circle-track" />
					<circle
						style={state._segmentStyle}
						class="db-loading-indicator-circle-segment"
					/>
				</svg>
			</Show>

			<div role={state.getRole()}>
				<label id={state._labelId} htmlFor={state._progressId}>
					<Show when={props.label} else={props.children}>
						{props.label}
					</Show>
				</label>
				<progress
					id={state._progressId}
					value={
						getBoolean(props.indeterminate)
							? undefined
							: (props.value ?? 0)
					}
					max={
						getBoolean(props.indeterminate)
							? undefined
							: (props.max ?? 100)
					}>
					<Show when={!getBoolean(props.indeterminate)}>
						{props.progressText}
					</Show>
				</progress>
				<Show when={!getBoolean(props.indeterminate)}>
					<span
						aria-hidden="true"
						data-show-progress-text={getBooleanAsString(
							props.showProgressText
						)}>
						{props.progressText}
					</span>
				</Show>
			</div>
		</div>
	);
}
