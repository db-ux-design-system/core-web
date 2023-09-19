import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBLinkState, DBLinkProps } from './model';
import { cls } from '../../utils';

useMetadata({
	isAttachedToShadowDom: false,
	component: {
		// MS Power Apps
		includeIcon: true,
		properties: [
			// jscpd:ignore-start
			{
				name: 'children',
				type: 'SingleLine.Text',
				defaultValue: 'Link'
			},
			{
				name: 'href',
				type: 'SingleLine.URL',
				defaultValue: 'https://www.deutschebahn.com/'
			},
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
				],
				defaultValue: 'adaptive'
			},
			{
				name: 'target',
				type: 'Enum',
				values: [
					{ key: '_self', name: '_self', value: '_self' },
					{ key: '_blank', name: '_blank', value: '_blank' },
					{ key: '_parent', name: '_parent', value: '_parent' },
					{ key: '_top', name: '_top', value: '_top' }
				],
				defaultValue: '_blank'
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
