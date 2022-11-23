import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBButtonProps, DBButtonState } from './model';
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
	const state = useStore<DBButtonState>({
		makeAlert() {
			alert(`Button: ${props.text} works.`);
		}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<button
			class="db-button"
			data-variant={props.variant}
			onClick={() => state.makeAlert()}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<Show when={props.icon}>
				<DBIcon icon={props.icon} />
			</Show>
			{/* we need spacings around props.text for compilation */}
			<Show when={props.text}> {props.text} </Show>
			{props.children}
		</button>
	);
}
