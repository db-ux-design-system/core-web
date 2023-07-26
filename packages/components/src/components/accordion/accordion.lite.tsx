import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBAccordionState, DBAccordionProps } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: false,
		properties: []
	}
});

/**
 *
 * FRAGEN: we handeln wir multiple elemente auf einer Ebene?
 * --> dialog müsste mehrmals auftauchen?
 * --> mit JSON optional
 *
 *
 * // Default
 * <DBAccordion>
 * {list.map( (listItem) => (
 *	 <DBAccordionItem slotSummary="{listItem.summary}" summary="onlyText">{listItem.content}</DBAccordionItem>
 * ))}
 * </DBAccordion>
 *
 * // gedoppelt, aber für WebComponents als propListener sinnvoll
 * <DBAccordion data={[{summary: "Headline", content: "123"}]}></DBAccordion>
 *
 *
 * --> Für alles eigene Child komponenten?
 * --> HTML pure dann
 *
 * @param props
 * @returns
 */

export default function DBAccordion(props: DBAccordionProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBAccordionState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<div ref={component} class={cls('db-accordion', props.className)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
		</div>
	);
}
