import { useMetadata, useRef, useStore } from '@builder.io/mitosis';
import type { DBCardProps, DBCardState } from './model';
import { cls } from '../../utils';
import { ClickEvent } from '../../shared/model';

useMetadata({});

export default function DBCard(props: DBCardProps) {
	const ref = useRef<HTMLDivElement>(null);
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
			ref={ref}
			id={props.id}
			className={cls('db-card', props.className)}
			data-behaviour={props.behaviour}
			data-elevation-level={props.elevationLevel}
			data-spacing={props.spacing}
			role={props.behaviour === 'interactive' ? 'button' : undefined}
			tabIndex={props.behaviour === 'interactive' ? 0 : undefined}
			onClick={(event: ClickEvent<HTMLElement>) =>
				state.handleClick(event)
			}>
			{props.children}
		</div>
	);
}
