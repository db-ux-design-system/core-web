import {
	Slot,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBShellContentProps } from './model';
import { MAIN_CONTENT_ID } from '../../shared/constants';

useMetadata({});

useDefaultProps<DBShellContentProps>({
	variant: 'auto'
});

export default function DBShellContent(props: DBShellContentProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<div
			ref={_ref}
			id={props.id}
			class={cls('db-shell-content', props.className)}
			data-variant={props.variant}>
			<Slot name="startSlot" />
			<main
				id={MAIN_CONTENT_ID}
				class={cls('db-main', props.mainClass)}
				aria-label={props.mainLabel}>
				{props.children}
			</main>
			<Slot name="endSlot" />
		</div>
	);
}
