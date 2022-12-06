import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import type { DBIconState, DBIconProps } from './model';
import './icon.scss';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: true,
		properties: [
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

export default function DBIcon(props: DBIconProps) {
	const state = useStore<DBIconState>({});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<span
			class={'db-icon' + (props.className || '')}
			data-icon={props.icon}
			aria-hidden="true">
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
		</span>
	);
}
