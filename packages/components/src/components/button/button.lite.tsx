import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import type { DBButtonProps, DBButtonState } from './model';
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
					{ key: 'Primary', name: 'Primary', value: 'primary' },
					{ key: 'Secondary', name: 'Secondary', value: 'secondary' },
					{ key: 'Tertiary', name: 'Tertiary', value: 'tertiary' },
					{ key: 'Ghost', name: 'Ghost', value: 'ghost' }
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
			class={
				'db-button' +
				(props.className ? ' ' + props.className : '') +
				(props.onlyIcon ? ' is-icon-text-replace' : '')
			}
			data-size={props.size}
			data-state={props.state}
			data-width={props.width}
			data-variant={props.variant}
			onClick={(event) => state.handleClick(event)}>
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
