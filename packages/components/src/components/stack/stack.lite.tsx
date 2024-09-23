import { Show, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { DBStackState, DBStackProps } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBStack(props: DBStackProps) {
	// This is used as forwardRef
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBStackState>({});
	// jscpd:ignore-end

	return (
		<div
			ref={ref}
			id={props.id}
			class={cls('db-stack', props.className)}
			data-gap={props.gap}
			data-variant={props.variant}
			data-direction={props.direction}
			data-alignment={props.alignment}
			data-justify-content={props.justifyContent}
			data-wrap={props.wrap}>
			{props.children}
		</div>
	);
}
