import {
	onUnMount,
	onUpdate,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBooleanAsString, hasCssFlag } from '../../utils';
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
	const _ref = useRef<HTMLDivElement | any>(null);

	const state = useStore<DBControlPanelFlatIconState>({
		_resizeObserverCallbackId: undefined
	});

	onUpdate(() => {
		if (_ref && !state._resizeObserverCallbackId) {
			// Capture the initial density and persist it as a data attribute
			const initialDensity = _ref.getAttribute('data-density');
			if (initialDensity) {
				_ref.setAttribute('data-initial-density', initialDensity);
			}

			state._resizeObserverCallbackId =
				new ResizeObserverListener().observe(_ref, () => {
					if (!_ref) return;

					const isMobile = hasCssFlag(
						_ref,
						'--db-control-panel-flat-icon-mobile'
					);

					const savedDensity = _ref.getAttribute(
						'data-initial-density'
					);

					if (isMobile) {
						_ref.setAttribute('data-density', 'regular');
					} else if (savedDensity) {
						_ref.setAttribute('data-density', savedDensity);
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
			id={props.id ?? props.propOverrides?.id}
			data-no-text={getBooleanAsString(props.noText, 'noText')}
			class={cls('db-control-panel-flat-icon', props.className)}>
			{props.children}
		</header>
	);
}
