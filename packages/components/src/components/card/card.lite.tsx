import {
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import type { DBCardProps, DBCardState } from './model';
import { cls } from '../../utils';
import { ClickEvent } from '../../shared/model';

useMetadata({});

useDefaultProps<DBCardProps>({});

export default function DBCard(props: DBCardProps) {
	const _ref = useRef<HTMLDivElement | null>(null);
	// jscpd:ignore-start
	const state = useStore<DBCardState>({
		handleClick: (event: ClickEvent<HTMLElement>) => {
			if (props.onClick) {
				props.onClick(event);
			}
		}
	});

	// jscpd:ignore-end

	return (
		<div
			ref={_ref}
			id={props.id}
			class={cls('db-card', props.className)}
			data-behavior={props.behavior}
			data-elevation-level={props.elevationLevel}
			data-spacing={props.spacing}
			role={props.behavior === 'interactive' ? 'button' : undefined}
			tabIndex={props.behavior === 'interactive' ? 0 : undefined}
			onClick={(event: ClickEvent<HTMLElement>) =>
				state.handleClick(event)
			}>
			{props.children}
		</div>
	);
}
