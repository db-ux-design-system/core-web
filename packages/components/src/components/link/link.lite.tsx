import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBLinkState, DBLinkProps } from './model';
import classNames from 'classnames';

useMetadata({
	isAttachedToShadowDom: false,
	component: {
		// MS Power Apps
		includeIcon: true,
		properties: [
			// jscpd:ignore-start
			{ name: 'children', type: 'SingleLine.Text' },
			{ name: 'href', type: 'SingleLine.URL' },
			{ name: 'title', type: 'SingleLine.Text' },
			{
				name: 'variant',
				type: 'Enum',
				values: [
					{ key: 'Adaptive', name: 'Adaptive', value: 'adaptive' },
					{ key: 'Primary', name: 'primary', value: 'primary' },
					{
						key: 'Inline',
						name: 'Inline',
						value: 'inline'
					}
				]
			}
			// jscpd:ignore-end
		]
	}
});

export default function DBLink(props: DBLinkProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBLinkState>({
		handleClick: (event: any) => {
			if (props.onClick) {
				props.onClick(event);
			}
		},
		getClassNames: (...args: classNames.ArgumentArray) => {
			return classNames(args);
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
			ref={component}
			class={state.getClassNames('db-link', props.className)}
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
			<Show when={props.text}>
				<span>{props.text}</span>
			</Show>
			{props.children}
		</a>
	);
}
