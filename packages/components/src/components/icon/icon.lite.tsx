import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import type { DBIconProps, DBIconState } from './model';

useMetadata({});

useDefaultProps<DBIconProps>({});

export default function DBIcon(props: DBIconProps) {
	const _ref = useRef<HTMLSpanElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBIconState>({});

	// jscpd:ignore-end

	return (
		<span
			ref={_ref}
			id={props.id}
			class={cls('db-icon', props.className)}
			data-icon={props.icon}
			data-icon-weight={props.weight}
			data-icon-variant={props.variant}
			aria-hidden="true">
			<Show when={props.text} else={props.children}>
				{props.text}
			</Show>
		</span>
	);
}
