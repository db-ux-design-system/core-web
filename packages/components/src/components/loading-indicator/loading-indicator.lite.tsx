import {
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, delay, getBooleanAsString } from '../../utils';
import {
	DBLoadingIndicatorProps,
	DBLoadingIndicatorState,
	LoadingIndicatorStateType
} from './model';

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
		getState: (): LoadingIndicatorStateType => {
			if (props.state) {
				return props.state;
			}

			if (props.indeterminate === undefined || props.indeterminate) {
				return 'active';
			}

			return 'inactive';
		},
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

			// TODO: Shall we have different default role for determinate vs indeterminate loading indicator?
			return 'alert';
		}
	});

	// jscpd:ignore-end

	onUpdate(() => {
		if (_ref && props.autoDisable) {
			let parent = (_ref as HTMLDivElement).parentElement;
			if (parent && parent.tagName === 'db-loading-indicator') {
				parent = parent.parentElement;
			}

			if (parent && 'disabled' in parent) {
				parent.disabled = state.getState() === 'active';
			}
		}
	}, [_ref, props.autoDisable, props.state]);

	onUpdate(() => {
		if (_ref) {
			if (props.delay === 'slow' || props.delay === 'fast') {
				void delay(
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

	// TODO: Add aria-labelledby/describedby for button purpose - save previous aria-label if set e.g. by tooltip
	// TODO: Add aria-busy + aria-describedby for overlay case non button
	// TODO: Add onTimeout function after 5 secondes of active state it should inform user, after 2 seconds of successful inform user - reset the state to initial state
	// TODO: Switch loading inside DBCustomSelect
	// TODO: Fix issues with DBButton

	return (
		<div
			ref={_ref}
			class={cls('db-loading-indicator', props.className)}
			style={{
				// @ts-ignore
				'--db-loading-indicator-percentage': state.getPercentage()
			}}
			data-indeterminate={props.indeterminate}
			data-size={props.size}
			data-variant={props.variant}
			data-delay={props.delay}
			data-state={state.getState()}
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

			<div>
				<label
					data-show-label={getBooleanAsString(props.showLabel)}
					id={props.id}>
					<Show when={props.label} else={props.children}>
						{props.label}
					</Show>
					<progress
						value={
							props.indeterminate ? undefined : (props.value ?? 0)
						}
						max={
							props.indeterminate ? undefined : (props.max ?? 100)
						}
						role={state.getRole()}>
						{props.indeterminate ? undefined : props.progressText}
					</progress>
				</label>
				<Show when={!props.indeterminate}>
					<span
						aria-hidden="true"
						data-show-progress-text={props.showProgressText}>
						{props.progressText}
					</span>
				</Show>
			</div>
		</div>
	);
}
