import {
	onMount,
	Show,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBLinkState, DBLinkProps } from './model';
import { cls, uuid } from '../../utils';
import { ClickEvent } from '../../shared/model';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: false
});

export default function DBLink(props: DBLinkProps) {
	const ref = useRef<HTMLAnchorElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBLinkState>({
		_id: DEFAULT_ID,
		handleClick: (event: ClickEvent<HTMLAnchorElement>) => {
			if (props.onClick) {
				props.onClick(event);
			}
		}
	});

	onMount(() => {
		state._id = props.id || 'link-' + uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<a
			ref={ref}
			id={state._id}
			class={cls('db-link', props.className)}
			href={props.href}
			title={props.title}
			target={props.target}
			rel={props.rel}
			role={props.role}
			hrefLang={props.hreflang}
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
