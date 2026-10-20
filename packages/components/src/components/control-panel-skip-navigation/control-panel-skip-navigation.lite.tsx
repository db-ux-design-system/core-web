import {
	Show,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { MAIN_CONTENT_ID } from '../../shared/constants';
import { cls } from '../../utils';
import { DBControlPanelSkipNavigationProps } from './model';

useMetadata({});

useDefaultProps<DBControlPanelSkipNavigationProps>({});

export default function DBControlPanelSkipNavigation(
	props: DBControlPanelSkipNavigationProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-control-panel-skip-navigation', props.className)}>
			<Show when={props.text} else={props.children}>
				<a href={`#${props.target ?? MAIN_CONTENT_ID}`}>{props.text}</a>
			</Show>
		</div>
	);
}
