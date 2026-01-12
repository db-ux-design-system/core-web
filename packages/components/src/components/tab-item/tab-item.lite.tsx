import {
	Show,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBoolean } from '../../utils';
import DBIcon from '../icon/icon.lite';
import type { DBTabItemProps } from './model';

useMetadata({});
useDefaultProps<DBTabItemProps>({});

export default function DBTabItem(props: DBTabItemProps) {
	const _ref = useRef<HTMLButtonElement | any>(null);

	const state = useStore({
		handleClick: (event: any) => {
			if (!props.disabled) {
				if (props.onClick) {
					props.onClick(event);
				}
			}
		}
	});

	return (
		<li class={cls('db-tab-item', props.className)} role="presentation">
			<button
				ref={_ref}
				type="button"
				role="tab"
				aria-selected={getBoolean(props.active)}
				aria-disabled={getBoolean(props.disabled)}
				aria-label={getBoolean(props.noText) ? props.label : undefined}
				tabIndex={props.active ? 0 : -1}
				id={props.id}
				disabled={getBoolean(props.disabled)}
				class="db-tab-button"
				onClick={(event) => state.handleClick(event)}>
				<Show when={props.icon && props.showIcon}>
					<DBIcon icon={props.icon} />
				</Show>
				<Show when={!props.noText}>
					<span class="db-tab-label">
						<Show when={props.label}>{props.label}</Show>
						<Show when={!props.label}>
							<Slot />
						</Show>
					</span>
				</Show>
				<Show when={props.iconTrailing && props.showIconTrailing}>
					<DBIcon icon={props.iconTrailing} />
				</Show>
			</button>
		</li>
	);
}
