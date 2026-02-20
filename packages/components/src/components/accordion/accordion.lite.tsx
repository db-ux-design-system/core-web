import {
	For,
	onMount,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, uuid } from '../../utils';
import DBAccordionItem from '../accordion-item/accordion-item.lite';
import { DBAccordionItemDefaultProps } from '../accordion-item/model';
import { DBAccordionProps, DBAccordionState } from './model';

useMetadata({});

useDefaultProps<DBAccordionProps>({});

export default function DBAccordion(props: DBAccordionProps) {
	const _ref = useRef<HTMLUListElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBAccordionState>({
		mName: '',
		mInitialized: false,
		mInitOpenIndexDone: false,
		convertItems(): DBAccordionItemDefaultProps[] {
			try {
				if (typeof props.items === 'string') {
					return JSON.parse(props.items as string);
				}

				return props.items as DBAccordionItemDefaultProps[];
			} catch (error) {
				console.error(error);
			}

			return [];
		}
	});

	onMount(() => {
		state.mInitialized = true;
		state.mInitOpenIndexDone = true;
	});
	// jscpd:ignore-end

	onUpdate(() => {
		// If we have a single behavior we first check for
		// props.name otherwise for state_id
		if (state.mInitialized) {
			if (props.behavior === 'single') {
				if (props.name) {
					if (state.mName !== props.name) {
						state.mName = props.name;
					}
				} else {
					state.mName = `accordion-${uuid()}`;
				}
			} else {
				state.mName = '';
			}
		}
	}, [state.mInitialized, props.name, props.behavior]);

	onUpdate(() => {
		if (_ref) {
			const childDetails = _ref.getElementsByTagName('details');
			if (childDetails) {
				for (const details of Array.from<HTMLDetailsElement>(
					childDetails
				)) {
					if (state.mName === '') {
						details.removeAttribute('name');
					} else {
						details.name = state.mName ?? '';
					}
				}
			}
		}
	}, [_ref, state.mName]);

	onUpdate(() => {
		if (_ref && state.mInitOpenIndexDone) {
			if (props?.initOpenIndex && props.initOpenIndex!.length > 0) {
				const childDetails = _ref.getElementsByTagName('details');
				if (childDetails) {
					const initOpenIndex =
						props.behavior === 'single' &&
						props.initOpenIndex!.length > 1
							? [props.initOpenIndex![0]] // use only one index for behavior=single
							: props.initOpenIndex;
					Array.from<HTMLDetailsElement>(childDetails).forEach(
						(details: HTMLDetailsElement, index: number) => {
							if (initOpenIndex?.includes(index)) {
								details.open = true;
							}
						}
					);
				}
			}
			state.mInitOpenIndexDone = false;
		}
	}, [_ref, state.mInitOpenIndexDone, props.initOpenIndex]);

	return (
		<ul
			ref={_ref}
			id={props.id ?? props._id}
			class={cls('db-accordion', props.className)}
			data-variant={props.variant}>
			<Show when={!props.items}>{props.children}</Show>
			<Show when={props.items}>
				<For each={state.convertItems()}>
					{(item: DBAccordionItemDefaultProps, index: number) => (
						<DBAccordionItem
							key={`accordion-item-${index}`}
							headlinePlain={item.headlinePlain}
							disabled={item.disabled}
							text={item.text}
						/>
					)}
				</For>
			</Show>
		</ul>
	);
}
