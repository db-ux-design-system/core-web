import {
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls } from '../../utils';
import { DBSectionProps, DBSectionState } from './model';

useMetadata({});
useDefaultProps<DBSectionProps>({});

export default function DBSection(props: DBSectionProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBSectionState>({});
	// jscpd:ignore-end

	return (
		<section
			ref={_ref}
			id={props.id}
			class={cls('db-section', props.className)}
			data-spacing={props.spacing || 'medium'}
			data-width={props.width}>
			{props.children}
		</section>
	);
}
