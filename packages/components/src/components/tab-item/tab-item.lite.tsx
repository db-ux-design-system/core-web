import {
	onMount,
	onUpdate,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import type { DBTabItemProps, DBTabItemState } from './model';
import { cls } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBTabItem(props: DBTabItemProps) {
	const ref = useRef<HTMLInputElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBTabItemState>({
		_id: DEFAULT_ID,
		initialized: false
	});

	onMount(() => {
		state.initialized = true;
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (props.active && state.initialized && ref) {
			ref.click();
			state.initialized = false;
		}
	}, [ref, state.initialized]);

	return (
		<li className={cls('db-tab-item', props.className)} role="tab">
			<label
				htmlFor={state._id}
				data-icon={props.icon}
				data-icon-after={props.iconAfter}
				data-no-text={props.noText}>
				<input
					disabled={props.disabled}
					ref={ref}
					type="radio"
					role="tab"
					id={state._id}
				/>

				<Show when={props.label}>{props.label}</Show>
				{props.children}
			</label>
		</li>
	);
}
