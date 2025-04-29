import {
	onMount,
	onUpdate,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBPopoverProps, DBPopoverState } from './model';
import {
	cls,
	getBooleanAsString,
	getDefaultProp,
	handleDataOutside
} from '../../utils';

useMetadata({});
useDefaultProps<DBPopoverProps>({});

export default function DBPopover(props: DBPopoverProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBPopoverState>({
		initialized: false,
		isExpanded: false,
		handleAutoPlacement: () => {
			state.isExpanded = true;
			if (!_ref) return;
			const article = _ref.querySelector('article');
			if (!article) return;
			handleDataOutside(article);
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		handleLeave: (event: any) => {
			const element = event.target as HTMLElement;
			const parent = element.parentNode;
			if (
				!parent ||
				(element.parentNode.querySelector(':focus') !== element &&
					element.parentNode.querySelector(':focus-within') !==
						element &&
					element.parentNode.querySelector(':hover') !== element)
			) {
				state.isExpanded = false;
			}
		},
		getTrigger: (): Element | null => {
			if (_ref) {
				const children: Element[] = Array.from(_ref.children);
				if (children.length >= 2) {
					const firstChild = children[0];
					if (firstChild.tagName.includes('-')) {
						// this is a workaround for custom angular components
						return firstChild.children?.length > 0
							? firstChild.children[0]
							: null;
					} else {
						return firstChild;
					}
				}
			}

			return null;
		}
	});

	onMount(() => {
		state.initialized = true;
	});

	onUpdate(() => {
		if (_ref && state.initialized) {
			const child = state.getTrigger();
			if (child) {
				child.ariaHasPopup = 'true';
			}
			state.initialized = false;
		}
	}, [_ref, state.initialized]);

	onUpdate(() => {
		if (_ref) {
			const child = state.getTrigger();
			if (child) {
				child.ariaExpanded = Boolean(state.isExpanded).toString();
			}
		}
	}, [_ref, state.isExpanded]);

	// jscpd:ignore-end

	return (
		<div
			ref={_ref}
			id={props.id}
			class={cls('db-popover', props.className)}
			onFocus={() => state.handleAutoPlacement()}
			onBlur={(event: FocusEvent) => state.handleLeave(event)}
			onMouseEnter={() => state.handleAutoPlacement()}
			onMouseLeave={(event: MouseEvent) => state.handleLeave(event)}>
			<Slot name="trigger" />
			<article
				class="db-popover-content"
				data-spacing={props.spacing}
				data-gap={getBooleanAsString(props.gap)}
				data-animation={getBooleanAsString(
					getDefaultProp(true, props.animation)
				)}
				data-open={getBooleanAsString(props.open)}
				data-delay={props.delay}
				data-width={props.width}
				data-placement={props.placement}>
				{props.children}
			</article>
		</div>
	);
}
