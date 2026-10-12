import {
	Slot,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBCustomHeadingProps } from './model';

useMetadata({});

useDefaultProps<DBCustomHeadingProps>({});

export default function DBCustomHeading(props: DBCustomHeadingProps) {
	const _ref = useRef<HTMLDivElement | any>(null);

	return (
		<div
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-custom-heading', props.className)}
			data-visual-size={props.visualSize}
			data-font-weight={props.fontWeight}>
			{/* The slots are deliberately not wrapped in an element: the wrapper is
			 * already a flex row with `gap`, so projected content becomes a flex item
			 * directly and an empty slot contributes no box and therefore no gap. */}
			<Slot name="startSlot" />
			{props.children}
			<Slot name="endSlot" />
		</div>
	);
}
