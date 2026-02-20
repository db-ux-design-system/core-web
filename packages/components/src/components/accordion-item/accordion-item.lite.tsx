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
import { ClickEvent } from '../../shared/model';
import { cls, getBooleanAsString } from '../../utils';
import { DBAccordionItemProps, DBAccordionItemState } from './model';

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
		mOpen: false,
		mName: undefined,
		mInitialized: false,
		handleNameAttribute: () => {
			if (_ref) {
				const setAttribute = _ref.setAttribute;
				_ref.setAttribute = (attribute: string, value: string) => {
					setAttribute.call(_ref, attribute, value);
					if (attribute === 'name') {
						state.mName = value;
					}
				};
			}
		},
		handleToggle: (event: ClickEvent<HTMLElement> | any) => {
			// We need this for react https://github.com/facebook/react/issues/15486#issuecomment-488028431
			event?.preventDefault();
			const newStateOpen = !state.mOpen;
			if (props.onToggle) {
				props.onToggle(newStateOpen);
			}
			state.mOpen = newStateOpen;
		}
	});

	onMount(() => {
		if (props.defaultOpen) {
			state.mOpen = props.defaultOpen;
		}

		state.mInitialized = true;
	});

	onUpdate(() => {
		if (_ref && state.mInitialized) {
			useTarget({ react: () => state.handleNameAttribute() });
		}
	}, [_ref, state.mInitialized]);

	onUpdate(() => {
		if (props.name) {
			state.mName = props.name;
		}
	}, [props.name]);

	// jscpd:ignore-end

	return (
		<li
			id={props.id ?? props._id}
			class={cls('db-accordion-item', props.className)}>
			<details
				aria-disabled={getBooleanAsString(props.disabled)}
				ref={_ref}
				name={state.mName}
				open={state.mOpen}>
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
