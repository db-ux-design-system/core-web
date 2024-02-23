import {
	onMount,
	onUpdate,
	Show,
	Slot,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import type { DBTabProps, DBTabState } from './model';
import { cls } from '../../utils';
import { ClickEvent } from '../../shared/model';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBTab(props: DBTabProps) {
	const ref = useRef<HTMLInputElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTabState>({
		_id: DEFAULT_ID,
		initialized: false
	});

	onMount(() => {
		state.initialized = true;
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (props.active && state.initialized) {
			ref.click();
			state.initialized = false;
		}
	}, [ref, state.initialized]);

	return (
		<label
			htmlFor={state._id}
			role="tab"
			className={cls('db-tab', props.className, {
				'is-icon-text-replace': props.noText
			})}
			data-icon={props.icon}
			data-icon-after={props.iconAfter}
			data-width={props.width}
			data-alignment={props.alignment}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<input
				disabled={props.disabled}
				ref={ref}
				type="radio"
				id={state._id}
			/>

			<Show when={props.label}>{props.label}</Show>
			{props.children}
		</label>
	);
}
