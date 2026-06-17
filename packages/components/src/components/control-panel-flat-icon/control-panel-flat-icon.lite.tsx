import {
	onMount,
	onUpdate,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import {
	DBControlPanelFlatIconProps,
	DBControlPanelFlatIconState
} from './model';

useMetadata({});

useDefaultProps<DBControlPanelFlatIconProps>({});

export default function DBControlPanelFlatIcon(
	props: DBControlPanelFlatIconProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBControlPanelFlatIconState>({
		initialized: false
	});
	// jscpd:ignore-end

	onMount(() => {
		state.initialized = true;
	});

	onUpdate(() => {
		if (_ref && state.initialized) {
			const tooltips = (_ref as HTMLDivElement).querySelectorAll(
				'.db-tooltip'
			);
			if (tooltips?.length > 0) {
				const array = Array.from(tooltips) as HTMLElement[];
				for (const tooltip of array) {
					tooltip.dataset['placement'] = 'top';
				}
			}
		}
	}, [_ref, state.initialized]);

	return (
		<header
			ref={_ref}
			id={props.id}
			data-no-text={getBooleanAsString(props.noText)}
			class={cls('db-control-panel-flat-icon', props.className)}>
			{props.children}
		</header>
	);
}
