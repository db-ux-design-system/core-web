import {
	onMount,
	onUpdate,
	Show,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import { DBAccordionItemProps, DBAccordionItemState } from './model';
import { cls, getBooleanAsString, uuid } from '../../utils';
import { ClickEvent } from '../../shared/model';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	angular: {
		nativeAttributes: ['open']
	}
});

useDefaultProps<DBAccordionItemProps>({});

export default function DBAccordionItem(props: DBAccordionItemProps) {
	const _ref = useRef<HTMLDetailsElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBAccordionItemState>({
		_id: DEFAULT_ID,
		_open: false,
		_name: undefined,
		initialized: false,
		handleNameAttribute: () => {
			if (_ref) {
				const setAttribute = _ref.setAttribute;
				_ref.setAttribute = (attribute: string, value: string) => {
					setAttribute.call(_ref, attribute, value);
					if (attribute === 'name') {
						state._name = value;
					}
				};
			}
		},
		handleToggle: (event: ClickEvent<HTMLElement> | any) => {
			// We need this for react https://github.com/facebook/react/issues/15486#issuecomment-488028431
			event?.preventDefault();
			const newStateOpen = !state._open;
			if (props.onToggle) {
				props.onToggle(newStateOpen);
			}
			state._open = newStateOpen;
		}
	});

	onMount(() => {
		state._id = props.id || 'accordion-item-' + uuid();
		if (props.defaultOpen) {
			state._open = props.defaultOpen;
		}

		state.initialized = true;
	});

	onUpdate(() => {
		if (_ref && state.initialized) {
			useTarget({ react: () => state.handleNameAttribute() });
		}
	}, [_ref, state.initialized]);

	onUpdate(() => {
		if (props.name) {
			state._name = props.name;
		}
	}, [props.name]);

	// jscpd:ignore-end

	return (
		<li id={state._id} class={cls('db-accordion-item', props.className)}>
			<details
				aria-disabled={getBooleanAsString(props.disabled)}
				ref={_ref}
				/* @ts-expect-error This is a new api for details */
				name={state._name}
				open={state._open}>
				<summary onClick={(event) => state.handleToggle(event)}>
					<Show when={props.headlinePlain}>
						{props.headlinePlain}
					</Show>
					<Show when={!props.headlinePlain}>
						<Slot name="headline" />
					</Show>
				</summary>
				<div>
					<Show when={props.text} else={props.children}>
						{props.text}
					</Show>
				</div>
			</details>
		</li>
	);
}
