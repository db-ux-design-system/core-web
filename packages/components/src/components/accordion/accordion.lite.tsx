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
import { cls, parseItems, uuid } from '../../utils';
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
		getItemDetails: () => {
			if (!_ref) {
				return [];
			}
			return Array.from<HTMLDetailsElement>(
				_ref.getElementsByTagName('details')
			).filter(
				(details: HTMLDetailsElement) =>
					details.parentElement?.classList.contains(
						'db-accordion-item'
					) && details.closest('.db-accordion') === _ref
			);
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
		if (state.initialized && _ref) {
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
			for (const details of state.getItemDetails()) {
				if (state._name === '') {
					details.removeAttribute('name');
				} else {
					details.name = state._name ?? '';
				}
			}
		}
	}, [_ref, state._name]);

	onUpdate(() => {
		if (_ref && state._initOpenIndexDone) {
			if (props?.initOpenIndex && props.initOpenIndex!.length > 0) {
				const initOpenIndex =
					props.behavior === 'single' &&
					props.initOpenIndex!.length > 1
						? [props.initOpenIndex![0]] // use only one index for behavior=single
						: props.initOpenIndex;
				state
					.getItemDetails()
					.forEach((details: HTMLDetailsElement, index: number) => {
						if (initOpenIndex?.includes(index)) {
							details.open = true;
						}
					});
			}
			state._initOpenIndexDone = false;
		}
	}, [_ref, state._initOpenIndexDone, props.initOpenIndex]);

	return (
		<ul
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-accordion', props.className)}
			data-variant={props.variant}>
			<Show when={props.items} else={props.children}>
				<For each={parseItems(props.items)}>
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
