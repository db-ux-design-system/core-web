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
	DBControlPanelFlatIconNavigationProps,
	DBControlPanelFlatIconNavigationState
} from './model';

useMetadata({});

useDefaultProps<DBControlPanelFlatIconNavigationProps>({});

export default function DBControlPanelFlatIconNavigation(
	props: DBControlPanelFlatIconNavigationProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBControlPanelFlatIconNavigationState>({
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
		<div
			ref={_ref}
			id={props.id}
			data-no-text={getBooleanAsString(props.noText)}
			class={cls(
				'db-control-panel-flat-icon-navigation',
				props.className
			)}>
			{props.children}
		</div>
	);
}
