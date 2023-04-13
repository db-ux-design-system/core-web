import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBIcon } from '../icon';
import type { DBButtonProps, DBButtonState } from './model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: true,
		hasDisabledProp: true,
		hasOnClick: true,
		properties: [
			{ name: 'text', type: 'SingleLine.Text' },
			{
				name: 'variant',
				type: 'Enum',
				values: [
					{ key: 'Primary', name: 'Primary', value: 'primary' },
					{ key: 'Outline', name: 'Outline', value: 'outline' },
					{
						key: 'Transparent',
						name: 'Transparent',
						value: 'transparent'
					},
					{
						key: 'Semi-Transparent',
						name: 'Semi-Transparent',
						value: 'semi-transparent'
					}
				]
			},
			{
				name: 'icon',
				type: 'Icon'
			},
			{ name: 'icntxt', type: 'TwoOptions' },
			{
				name: 'width',
				type: 'Enum',
				values: [
					{ key: 'Full', name: 'Full', value: 'full' },
					{ key: 'Auto', name: 'Auto', value: 'auto' }
				]
			}
		]
	}
});

export default function DBButton(props: DBButtonProps) {
	// This is used as forwardRef
	let component: any;
	const state = useStore<DBButtonState>({
		handleClick: (event: any) => {
			if (props.onClick) {
				props.onClick(event);
			}
		},
		iconVisible: (icon?: string) => {
			return Boolean(icon && icon !== '_' && icon !== 'none');
		}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<button
			ref={component}
			type={props.type}
			disabled={props.disabled}
			aria-label={props.label}
			class={
				'db-button' +
				(props.className ? ' ' + props.className : '') +
				(state.iconVisible(props.icon) && !props.icntxt
					? ' is-icon-text-replace'
					: '')
			}
			data-size={props.size}
			data-state={props.state}
			data-width={props.width}
			data-variant={props.variant}
			onClick={(event) => state.handleClick(event)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<Show when={state.iconVisible(props.icon)}>
				<DBIcon icon={props.icon} icntxt={props.icntxt}></DBIcon>
			</Show>
			{props.children}
			{props.text}
		</button>
	);
}
