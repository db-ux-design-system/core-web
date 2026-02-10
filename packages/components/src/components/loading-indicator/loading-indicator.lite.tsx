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
import { DEFAULT_ID } from '../../shared/constants';
import { cls, delay as delayFn, getBooleanAsString, uuid } from '../../utils';
import { DBLoadingIndicatorProps, DBLoadingIndicatorState } from './model';

useMetadata({});

useDefaultProps<DBLoadingIndicatorProps>({
	indeterminate: true,
	variant: 'inline',
	size: 'medium',
	autoDisable: true
});

export default function DBLoadingIndicator(props: DBLoadingIndicatorProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBLoadingIndicatorState>({
		_id: DEFAULT_ID,
		_loadingState: 'inactive',
		_previousLoadingState: undefined,
		_style: {},
		initialized: false,
		getPercentage: () => {
			if (props.indeterminate || !props.value || !props.max) {
				return;
			}

			return `${(Number(props.value) / Number(props.max)).toFixed(2)}`;
		},
		getRole: () => {
			if (props.role) {
				if (props.role === 'none') {
					return;
				}

				return props.role;
			}

			return 'status';
		},
		handleParentDisabled: () => {
			if (_ref && props.autoDisable && state.initialized) {
				let parent = (_ref as HTMLDivElement).parentElement;
				if (parent && parent.localName === 'db-loading-indicator') {
					parent = parent.parentElement;
				}

				if (parent && 'disabled' in parent) {
					parent.disabled = state._loadingState !== 'inactive';
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
					? ariaLabelledBy.split(',')
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
						labelledByElements.join(',')
					);
				} else {
					parent.removeAttribute(ariaAttribute);
				}
			}
		}
	});

	// jscpd:ignore-end

	onMount(() => {
		state._id = props.id || 'loading-indicator-' + uuid();
		state.initialized = true;
	});

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
			// Not merged if as workaround for angular
			if (
				state._loadingState !== 'inactive' &&
				state._loadingState !== state._previousLoadingState
			) {
				state._previousLoadingState = state._loadingState;
				void delayFn(
					() => {
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
		} else if (props.indeterminate === undefined || props.indeterminate) {
			state._loadingState = 'active';
		} else {
			state._loadingState = 'inactive';
		}
	}, [props.state]);

	onUpdate(() => {
		if (_ref) {
			if (props.delay === 'slow' || props.delay === 'fast') {
				void delayFn(
					() => {
						if (_ref) {
							(_ref as HTMLDivElement).dataset['delay'] = '';
						}
					},
					props.delay === 'slow' ? 500 : 250
				);
			}
		}
	}, [_ref, props.delay]);

	onUpdate(() => {
		state._style = {
			'--db-loading-indicator-percentage': state.getPercentage()
		};
	}, [props.indeterminate, props.value, props.max]);

	onUnMount(() => {
		state.handleParentAria(true);
		state.handleParentDisabled();
	});

	return (
		<div
			ref={_ref}
			class={cls('db-loading-indicator', props.className)}
			style={state._style}
			data-indeterminate={getBooleanAsString(props.indeterminate)}
			data-size={props.size}
			data-variant={props.variant}
			data-delay={props.delay}
			data-state={state._loadingState}
			data-overlay={getBooleanAsString(props.overlay)}>
			<Show when={props.variant !== 'progress-bar'}>
				<svg
					class="db-loading-indicator-circle"
					viewBox={
						props.variant === 'inline'
							? '10 10 20 20'
							: '32 32 64 64'
					}
					aria-hidden="true">
					<circle class="db-loading-indicator-circle-track" />
					<circle class="db-loading-indicator-circle-segment" />
				</svg>
			</Show>

			<div role={state.getRole()}>
				<label
					data-show-label={getBooleanAsString(props.showLabel)}
					id={state._id}>
					<Show when={props.label} else={props.children}>
						{props.label}
					</Show>
					<progress
						value={
							props.indeterminate ? undefined : (props.value ?? 0)
						}
						max={
							props.indeterminate ? undefined : (props.max ?? 100)
						}>
						{props.indeterminate ? undefined : props.progressText}
					</progress>
				</label>
				<Show when={!props.indeterminate}>
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
