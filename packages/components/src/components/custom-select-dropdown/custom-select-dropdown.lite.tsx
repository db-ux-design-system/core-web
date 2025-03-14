import {
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import {
	DBCustomSelectDropdownProps,
	DBCustomSelectDropdownState
} from './model';
import { cls } from '../../utils';

useMetadata({});

useDefaultProps<DBCustomSelectDropdownProps>({
	width: 'fixed'
});

export default function DBCustomSelectDropdown(
	props: DBCustomSelectDropdownProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | null>(null);
	// jscpd:ignore-start
	const state = useStore<DBCustomSelectDropdownState>({});
	// jscpd:ignore-end

	return (
		<article
			ref={_ref}
			id={props.id}
			class={cls('db-custom-select-dropdown db-card', props.className)}
			data-spacing="none"
			data-width={props.width}>
			{props.children}
		</article>
	);
}
