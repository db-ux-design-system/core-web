import { Slot, useMetadata, useRef, useStore } from '@builder.io/mitosis';
import { DBPopoverProps, DBPopoverState } from './model';
import { cls, isInView } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBPopover(props: DBPopoverProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBPopoverState>({
		handleAutoPlacement: () => {
			if (ref) {
				const articles = ref.getElementsByTagName('article');
				if (articles?.length > 0) {
					const article = articles[0];
					const inView = isInView(article);
					Object.entries(inView).forEach(([pos, value]) => {
						if (value) {
							article.setAttribute(
								`data-outside-${pos === 'left' || pos === 'right' ? 'vx' : 'vy'}`,
								pos
							);
						}
					});
				}
			}
		}
	});

	// jscpd:ignore-end

	return (
		<div
			ref={ref}
			id={props.id}
			class={cls('db-popover', props.className)}
			aria-haspopup="true"
			onFocus={() => state.handleAutoPlacement()}
			onMouseEnter={() => state.handleAutoPlacement()}>
			<Slot name="trigger" />
			<article
				class="db-popover-content"
				data-spacing={props.spacing}
				data-gap={props.gap}
				data-animation={props.animation}
				data-open={props.open}
				data-delay={props.delay}
				data-width={props.width}
				data-placement={props.placement}>
				{props.children}
			</article>
		</div>
	);
}
