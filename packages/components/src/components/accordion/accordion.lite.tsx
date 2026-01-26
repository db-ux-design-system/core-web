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
		_name: '',
		initialized: false,
		_initOpenIndexDone: false,
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
		state.initialized = true;
		state._initOpenIndexDone = true;
	});
	// jscpd:ignore-end

	onUpdate(() => {
		// If we have a single behavior we first check for
		// props.name otherwise for state_id
		if (state.initialized) {
			if (props.behavior === 'single') {
				if (props.name) {
					if (state._name !== props.name) {
						state._name = props.name;
					}
				} else {
					state._name = `accordion-${uuid()}`;
				}
			} else {
				state._name = '';
			}
		}
	}, [state.initialized, props.name, props.behavior]);

	onUpdate(() => {
		if (_ref) {
			const childDetails = _ref.getElementsByTagName('details');
			if (childDetails) {
				for (const details of Array.from<HTMLDetailsElement>(
					childDetails
				)) {
					if (state._name === '') {
						details.removeAttribute('name');
					} else {
						details.name = state._name ?? '';
					}
				}
			}
		}
	}, [_ref, state._name]);

	onUpdate(() => {
		if (_ref && state._initOpenIndexDone) {
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
			state._initOpenIndexDone = false;
		}
	}, [_ref, state._initOpenIndexDone, props.initOpenIndex]);

	return (
		<ul
			ref={_ref}
			id={props.id}
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
