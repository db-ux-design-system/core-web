import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import type { DBButtonProps, DBButtonState } from './model';
import './button.scss';
import { DBIcon } from '../icon';

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
					{ key: 'Default', name: 'Default', value: '_' },
					{ key: 'Primary', name: 'Primary', value: 'primary' }
				]
			},
			{
				name: 'icon',
				type: 'Enum',
				values: [
					{ key: 'None', name: 'None', value: '_' },
					{ key: 'Account', name: 'Account', value: 'account' }
				]
			}
		]
	}
});

export default function DBButton(props: DBButtonProps) {
	const state = useStore<DBButtonState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<button
			class={`db-button${props.className ? ` ${props.className}` : ''}${
				props.onlyIcon ? 'is-icon-text-replace' : ''
			}`}
			data-size={props.size}
			data-state={props.state}
			data-width={props.width}
			data-variant={props.variant}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<DBIcon icon={props.icon} withText={!props.onlyIcon}>
				{/* we need spacings around props.text for compilation */}
				<Show when={props.text}> {props.text} </Show>
				{props.children}
			</DBIcon>
		</button>
	);
}
