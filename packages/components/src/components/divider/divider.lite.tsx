import {
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBDividerProps, DBDividerState } from './model';

useMetadata({});

useDefaultProps<DBDividerProps>({});

export default function DBDivider(props: DBDividerProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBDividerState>({});

	// jscpd:ignore-end

	return (
		<div
			ref={_ref}
			id={props.id}
			data-margin={props.margin}
			data-variant={props.variant}
			data-emphasis={props.emphasis}
			data-width={props.width}
			class={cls('db-divider', props.className)}
		/>
	);
}
