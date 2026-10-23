import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { ColorType } from '../../shared/model';
import { cls, getBooleanAsString } from '../../utils';
import { DBInfotextProps, DBInfotextState } from './model';

useMetadata({});

useDefaultProps<DBInfotextProps>({});

export default function DBInfotext(props: DBInfotextProps) {
	const _ref = useRef<HTMLSpanElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBInfotextState>({
		_getColor: (): ColorType | undefined => {
			if (props.color) {
				return props.color;
			}

			if (props.semantic === 'informational') {
				return 'blue';
			}

			if (props.semantic === 'critical') {
				return 'red';
			}

			if (props.semantic === 'warning') {
				return 'yellow';
			}

			if (props.semantic === 'successful') {
				return 'green';
			}

			return 'neutral';
		}
	});
	// jscpd:ignore-end

	return (
		<span
			data-material={props.material}
			data-color={state._getColor()}
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-infotext', props.className)}
			data-icon={props.icon}
			data-semantic={props.semantic}
			data-size={props.size}
			data-wrap={getBooleanAsString(props.wrap, 'wrap')}
			data-show-icon-leading={getBooleanAsString(
				props.showIcon ?? true,
				'showIcon'
			)}>
			<Show when={props.text}>{props.text}</Show>
			{props.children}
		</span>
	);
}
