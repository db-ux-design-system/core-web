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
import { cls, getBooleanAsString } from '../../utils';
import { ClickEvent } from '../../shared/model';

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

	onUpdate(() => {
		if (props.open) {
			state._open = props.open;
		}
	}, [props.open]);

	// jscpd:ignore-end

	return (
		<li id={props.id} class={cls('db-accordion-item', props.className)}>
			<details
				aria-disabled={getBooleanAsString(props.disabled)}
				ref={_ref}
				/* @ts-expect-error This is a new api for details */
				name={state._name}
				open={state._open}>
				<summary onClick={(event) => state.handleToggle(event)}>
					<Show
						when={props.headlinePlain}
						else={<Slot name="headline" />}>
						{props.headlinePlain}
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
