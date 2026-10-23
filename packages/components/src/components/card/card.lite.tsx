import {
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { ClickEvent, MaterialType } from '../../shared/model';
import { cls } from '../../utils';
import type { DBCardProps, DBCardState } from './model';

useMetadata({});

useDefaultProps<DBCardProps>({});

export default function DBCard(props: DBCardProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBCardState>({
		_getMaterial: (): MaterialType | undefined => {
			if (props.material) {
				return props.material;
			}

			if (props.elevationLevel === '2') {
				return 'filled-2';
			}

			if (props.elevationLevel === '3') {
				return 'filled-3';
			}

			return 'filled-1';
		},
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
			id={props.id ?? props.propOverrides?.id}
			class={cls('db-card', props.className)}
			data-material={state._getMaterial()}
			data-color={props.color}
			data-behavior={props.behavior}
			data-elevation-level={props.elevationLevel}
			data-spacing={props.spacing}
			onClick={(event: ClickEvent<HTMLElement>) =>
				state.handleClick(event)
			}>
			{props.children}
		</div>
	);
}
