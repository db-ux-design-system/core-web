import {
	onUnMount,
	onUpdate,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import { ResizeObserverListener } from '../../utils/resize-observer-listener';
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

	const state = useStore<DBControlPanelFlatIconState>({
		_resizeObserverCallbackId: undefined
	});

	onUpdate(() => {
		if (_ref && !state._resizeObserverCallbackId) {
			// Save the initial density from the element or its inherited value

			const controlPanel = _ref as HTMLDivElement;
			if (_ref.getAttribute('data-density')) {
				controlPanel.setAttribute(
					'data-initial-density',
					_ref.getAttribute('data-density')
				);
			}

			state._resizeObserverCallbackId =
				new ResizeObserverListener().observe(_ref, () => {
					if (!_ref) return;
					const isMobile =
						getComputedStyle(_ref).getPropertyValue(
							'--db-control-panel-flat-icon-mobile'
						) === '1';

					if (isMobile) {
						_ref.setAttribute('data-density', 'regular');
					} else if (_ref.getAttribute('data-initial-density')) {
						_ref.setAttribute(
							'data-density',
							_ref.getAttribute('data-initial-density')
						);
					} else {
						_ref.removeAttribute('data-density');
					}
				});
		}
	}, [_ref]);

	onUnMount(() => {
		if (state._resizeObserverCallbackId) {
			new ResizeObserverListener().unobserve(
				state._resizeObserverCallbackId!
			);
			state._resizeObserverCallbackId = undefined;
		}
	});

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
