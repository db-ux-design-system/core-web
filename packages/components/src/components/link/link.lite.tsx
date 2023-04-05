import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBLinkState, DBLinkProps } from './model';

useMetadata({
	isAttachedToShadowDom: false,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBLink(props: DBLinkProps) {
	// This is used as forwardRef
	let component: any;
	const state = useStore<DBLinkState>({
		handleClick: (event: any) => {
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

	return (
		<a
			ref={component}
			class={'db-link' + (props.className ? ' ' + props.className : '')}
			href={props.href}
			title={props.title}
			target={props.target}
			rel={props.rel}
			role={props.role}
			aria-disabled={props.disabled}
			tabIndex={props.disabled ? -1 : 0}
			aria-selected={props.selected}
			aria-label={props.label}
			hrefLang={props.hreflang}
			aria-current={props.current}
			data-size={props.size}
			data-variant={props.variant}
			data-content={props.content || 'internal'}
			onClick={(event) => state.handleClick(event)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
		</a>
	);
}
