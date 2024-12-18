import { useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { DBDividerProps, DBDividerState } from './model';
import { cls } from '../../utils';

useMetadata({});

export default function DBDivider(props: DBDividerProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBDividerState>({});

	// jscpd:ignore-end

	return (
		<div
			ref={ref}
			id={props.id}
			data-margin={props.margin}
			data-variant={props.variant}
			data-emphasis={props.emphasis}
			data-width={props.width}
			class={cls('db-divider', props.className)}
		/>
	);
}
