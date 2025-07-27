import { useDefaultProps, useMetadata, useRef } from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBCustomSelectDropdownProps } from './model';

useMetadata({});

useDefaultProps<DBCustomSelectDropdownProps>({
	width: 'fixed'
});

export default function DBCustomSelectDropdown(
	props: DBCustomSelectDropdownProps
) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);

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
