import { useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { DBBadgeProps, DBBadgeState } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBBadge(props: DBBadgeProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const state = useStore<DBBadgeState>({});

	return (
		<span
			ref={ref}
			id={props.id}
			class={cls('db-badge', props.className)}
			data-semantic={props.semantic}
			data-size={props.size}
			data-emphasis={props.emphasis}
			data-placement={props.placement}>
			{props.children}
		</span>
	);
}
