import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBLinkState, DBLinkProps } from './model';
import { cls } from '../../utils';
import { ClickEvent } from '../../shared/model';

useMetadata({
	isAttachedToShadowDom: false
});

export default function DBLink(props: DBLinkProps) {
	const ref = useRef<HTMLAnchorElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBLinkState>({
		handleClick: (event: ClickEvent<HTMLAnchorElement>) => {
			if (props.onClick) {
				props.onClick(event);
			}
		}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<a
			ref={ref}
			id={props.id}
			class={cls('db-link', props.className)}
			href={props.href}
			title={props.title}
			target={props.target}
			rel={props.rel}
			role={props.role}
			aria-disabled={props.disabled}
			tabIndex={props.disabled ? -1 : 0}
			aria-selected={props.selected}
			aria-label={props.label}
			aria-current={props.current}
			data-size={props.size}
			data-variant={props.variant}
			data-content={props.content || 'internal'}
			onClick={(event: ClickEvent<HTMLAnchorElement>) =>
				state.handleClick(event)
			}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<Show when={props.text}>
				<span>{props.text}</span>
			</Show>
			{props.children}
		</a>
	);
}
