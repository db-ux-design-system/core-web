import {
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { MaterialType } from '../../shared/model';
import { cls } from '../../utils';
import { DBControlPanelMetaProps, DBControlPanelMetaState } from './model';

useMetadata({});

useDefaultProps<DBControlPanelMetaProps>({});

export default function DBControlPanelMeta(props: DBControlPanelMetaProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);
	const state = useStore<DBControlPanelMetaState>({
		_getMaterial: (): MaterialType | undefined => {
			return props.material ?? 'filled-2';
		}
	});

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			data-material={state._getMaterial()}
			data-color={props.color}
			class={cls('db-control-panel-meta', props.className)}>
			{props.children}
		</div>
	);
}
