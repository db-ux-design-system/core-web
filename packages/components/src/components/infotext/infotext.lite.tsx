import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import { DBInfotextProps, DBInfotextState } from './model';

useMetadata({});

useDefaultProps<DBInfotextProps>({});

export default function DBInfotext(props: DBInfotextProps) {
	const _ref = useRef<HTMLSpanElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBInfotextState>({});
	// jscpd:ignore-end

	return (
		<span
			ref={_ref}
			id={props.id}
			class={cls('db-infotext', props.className)}
			data-icon={props.icon}
			data-semantic={props.semantic}
			data-size={props.size}
			data-show-icon-leading={getBooleanAsString(props.showIcon ?? true)}>
			<span class="db-infotext-content">
				<Show when={props.text} else={props.children}>
					{props.text}
				</Show>
			</span>
		</span>
	);
}
