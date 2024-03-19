import { useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { DBPopoverProps, DBPopoverState } from './model';
import { cls } from '../../utils';
import { ClickEvent } from '../../shared/model';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBPopover(props: DBPopoverProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBPopoverState>({
		handleClick: (event: ClickEvent<HTMLElement>) => {
			event.stopPropagation();
		}
	});

	// jscpd:ignore-end

	return (
		<i
			ref={ref}
			id={props.id}
			class={cls('db-popover', props.className)}
			data-spacing={props.spacing}
			data-gap={props.gap}
			data-animation={props.animation}
			data-open={props.open}
			data-delay={props.delay}
			data-width={props.width}
			data-placement={props.placement}
			onClick={(event: ClickEvent<HTMLElement>) =>
				state.handleClick(event)
			}>
			{props.children}
		</i>
	);
}
