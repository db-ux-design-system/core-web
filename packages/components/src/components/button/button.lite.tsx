import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBIcon } from '../icon';
import type { DBButtonProps, DBButtonState } from './model';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: true,
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
				type: 'Enum',
				values: [
					{ key: 'None', name: 'None', value: '_' },
					{ key: 'Account', name: 'Account', value: 'account' }
				]
			},
			{ name: 'icntxt', type: 'TwoOptions' }
		]
	}
});

export default function DBButton(props: DBButtonProps) {
	const state = useStore<DBButtonState>({
		handleClick: (event) => {
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
		<button
			type={props.type}
			disabled={props.disabled}
			aria-label={props.text}
			class={
				'db-button' +
				(props.className ? ' ' + props.className : '') +
				(props.icon && !props.icntxt ? ' is-icon-text-replace' : '')
			}
			data-size={props.size}
			data-state={props.state}
			data-width={props.width}
			data-variant={props.variant}
			onClick={(event) => state.handleClick(event)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<DBIcon icon={props.icon} icntxt={props.icntxt}></DBIcon>
			{props.children}
		</button>
	);
}
