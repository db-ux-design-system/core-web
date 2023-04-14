import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import type { DBIconState, DBIconProps } from './model';
import classNames from 'classnames';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: true,
		properties: [
			{
				name: 'icon',
				type: 'Icon'
			},
			{ name: 'withText', type: 'TwoOptions' }
		]
	}
});

export default function DBIcon(props: DBIconProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBIconState>({
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
		<span
			ref={component}
			class={state.getClassNames('db-icon', props.className, {
				'is-icon-text-replace': props.withText
			})}
			data-icon={props.icon}
			aria-hidden="true">
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
		</span>
	);
}
