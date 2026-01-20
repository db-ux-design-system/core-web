import {
	onMount,
	onUnMount,
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBTabPanelProps, DBTabPanelState } from './model';

useMetadata({});
useDefaultProps<DBTabPanelProps>({});

export default function DBTabPanel(props: DBTabPanelProps) {
	const _ref = useRef<HTMLDivElement>(null);

	const state = useStore<DBTabPanelState>({
		internalHidden: props.hidden,
		_observer: null
	});

	onMount(() => {
		state.internalHidden = props.hidden;

		// Update internal state when the 'hidden' attribute is modified externally
		if (_ref) {
			const observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					if (mutation.attributeName === 'hidden') {
						const isHidden = _ref.hasAttribute('hidden');
						if (state.internalHidden !== isHidden) {
							state.internalHidden = isHidden;
						}
					}
				});
			});
			observer.observe(_ref, {
				attributes: true,
				attributeFilter: ['hidden']
			});
			state._observer = observer;
		}
	});

	onUnMount(() => {
		state._observer?.disconnect();
	});

	onUpdate(() => {
		if (props.hidden !== undefined) {
			state.internalHidden = props.hidden;
		}
	}, [props.hidden]);

	onUpdate(() => {
		if (_ref) {
			// Manually update the DOM 'hidden' attribute to match the internal state
			if (state.internalHidden) {
				if (!_ref.hasAttribute('hidden')) {
					_ref.setAttribute('hidden', '');
				}
			} else {
				if (_ref.hasAttribute('hidden')) {
					_ref.removeAttribute('hidden');
				}
			}
		}
	}, [state.internalHidden]);

	return (
		<section
			ref={_ref}
			class={cls('db-tab-panel', props.className)}
			id={props.id}
			role="tabpanel"
			hidden={props.hidden}
			aria-labelledby={props.ariaLabelledby}>
			<Show when={props.content}> {props.content}</Show>
			{props.children}
		</section>
	);
}
