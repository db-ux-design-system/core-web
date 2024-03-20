import { useMetadata, useRef, useStore } from '@builder.io/mitosis';
import type { DBIconProps, DBIconState } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBIcon(props: DBIconProps) {
	const ref = useRef<HTMLSpanElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBIconState>({});

	// jscpd:ignore-end

	return (
		<span
			ref={ref}
			id={props.id}
			class={cls('db-icon', props.className)}
			data-icon={props.icon}
			data-icon-weight={props.weight}
			data-icon-variant={props.variant}
			aria-hidden="true"
			title={props.title}>
			{props.children}
		</span>
	);
}
