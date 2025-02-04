import {
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import {
	DBMultiSelectDropdownProps,
	DBMultiSelectDropdownState
} from './model';
import { cls } from '../../utils';

useMetadata({});

useDefaultProps<DBMultiSelectDropdownProps>({});

export default function DBMultiSelectDropdown(
	props: DBMultiSelectDropdownProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBMultiSelectDropdownState>({});
	// jscpd:ignore-end

	return (
		<article
			ref={_ref}
			id={props.id}
			class={cls('db-multi-select-dropdown db-card', props.className)}
			data-spacing="none">
			<Slot name="header" />
			<Slot name="notification"></Slot>
			<section>{props.children}</section>
		</article>
	);
}
