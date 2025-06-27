import {
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { cls, getBooleanAsString } from '../../utils';
import { DBStackProps, DBStackState } from './model';

useMetadata({});
useDefaultProps<DBStackProps>({});

export default function DBStack(props: DBStackProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBStackState>({});
	// jscpd:ignore-end

	return (
		<div
			ref={_ref}
			id={props.id}
			class={cls('db-stack', props.className)}
			data-gap={props.gap}
			data-variant={props.variant}
			data-direction={props.direction}
			data-alignment={props.alignment}
			data-justify-content={props.justifyContent}
			data-wrap={getBooleanAsString(props.wrap)}>
			{props.children}
		</div>
	);
}
