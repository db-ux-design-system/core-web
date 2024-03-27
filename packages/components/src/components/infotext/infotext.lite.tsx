import { useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { DBInfotextProps, DBInfotextState } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBInfotext(props: DBInfotextProps) {
	const ref = useRef<HTMLSpanElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBInfotextState>({});
	// jscpd:ignore-end

	// TODO: Check if this should be a div or a span
	return (
		<span
			ref={ref}
			id={props.id}
			class={cls('db-infotext', props.className)}
			title={props.title}
			data-icon={props.icon}
			data-semantic={props.semantic}
			data-size={props.size}>
			{props.children}
		</span>
	);
}
