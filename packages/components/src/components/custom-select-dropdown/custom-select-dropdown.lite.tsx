import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { DBCustomSelectDropdownProps } from './model';
import { cls } from '../../utils';

useMetadata({});

useDefaultProps<DBCustomSelectDropdownProps>({
	width: 'fixed'
});

export default function DBCustomSelectDropdown(
	props: DBCustomSelectDropdownProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | undefined>(undefined);

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
