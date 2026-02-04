import {
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
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
		}
	});

	// jscpd:ignore-end

	onUpdate(() => {
		if (_ref && props.autoDisable) {
			let parent = _ref?.current?.parentElement;
			if (parent && parent.tagName === 'db-loading-indicator') {
				parent = parent.parentElement;
			}

			if (parent && 'disabled' in parent) {
				parent.disabled = props.state === 'active';
			}
		}
	}, [_ref, props.autoDisable, props.state]);

	return (
		<div
			ref={_ref}
			class={cls('db-loading-indicator', props.className)}
			data-indeterminate={props.indeterminate}
			data-size={props.size}
			data-variant={props.variant}
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
						role="alert">
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
