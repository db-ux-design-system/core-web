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
	DEFAULT_PROGRESS_ID_SUFFIX
} from '../../shared/constants';
import { cls, getBoolean, getBooleanAsString, uuid } from '../../utils';
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
		_style: {},
		initialized: false,
		resetIds: () => {
			const mId = props.id || 'loading-indicator-' + uuid();
			state._id = mId;
			state._labelId = mId + DEFAULT_LABEL_ID_SUFFIX;
			state._progressId = mId + DEFAULT_PROGRESS_ID_SUFFIX;
		},
		getPercentage: () => {
			if (getBoolean(props.indeterminate) || !props.value || !props.max) {
				return;
			}

			return `${Math.min(Math.max(Number(props.value) / Number(props.max), 0), 1).toFixed(2)}`;
		},
		getRole: () => {
			if (props.role) {
				return props.role;
			}

			return 'status';
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
						parent.disabled = true;
					}

					if (
						(forceEnable || state._loadingState === 'inactive') &&
						state._didDisableParent
					) {
						state._didDisableParent = false;
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

				const ariaAttribute = isButton
					? 'aria-labelledby'
					: 'aria-describedby';

				const ariaLabelledBy = parent.getAttribute(ariaAttribute);
				let labelledByElements = ariaLabelledBy
					? ariaLabelledBy.split(' ')
					: [];
				if (remove || state._loadingState === 'inactive') {
					if (labelledByElements.includes(state._id!)) {
						labelledByElements = labelledByElements.filter(
							(elementId) => elementId !== state._id
						);

						if (!isButton) {
							parent.ariaBusy = null;
						}
					} else {
						return;
					}
				} else {
					if (!labelledByElements.includes(state._id!)) {
						labelledByElements.push(state._id!);
					}

					if (!isButton) {
						parent.ariaBusy =
							state._loadingState === 'active' ? 'true' : null;
					}
				}

				if (labelledByElements.length) {
					parent.setAttribute(
						ariaAttribute,
						labelledByElements.join(' ')
					);
				} else {
					parent.removeAttribute(ariaAttribute);
				}
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

				state._timeoutId = setTimeout(
					() => {
						state._timeoutId = undefined;
						if (props.onTimeout) {
							props.onTimeout(state._loadingState);
						}
					},
					state._loadingState === 'active' ? 5000 : 2000
				);
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
		state._style = {
			'--db-loading-indicator-percentage': state.getPercentage()
		};
	}, [props.indeterminate, props.value, props.max]);

	onUnMount(() => {
		if (state._timeoutId) {
			clearTimeout(state._timeoutId);
			state._timeoutId = undefined;
		}

		state.handleParentAria(true);
		state.handleParentDisabled(true);
	});

	return (
		<div
			ref={_ref}
			id={state._id}
			class={cls('db-loading-indicator', props.className)}
			style={state._style}
			data-indeterminate={getBooleanAsString(props.indeterminate)}
			data-size={props.size}
			data-variant={props.variant}
			data-orientation={props.orientation}
			data-delay={props.delay}
			data-state={state._loadingState}
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
					<circle class="db-loading-indicator-circle-segment" />
				</svg>
			</Show>

			<div role={state.getRole()}>
				<label
					data-show-label={getBooleanAsString(props.showLabel)}
					id={state._labelId}
					htmlFor={state._progressId}>
					<Show when={props.label} else={props.children}>
						{props.label}
					</Show>
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
						{getBoolean(props.indeterminate)
							? undefined
							: props.progressText}
					</progress>
				</label>
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
