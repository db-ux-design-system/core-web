import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBIcon } from '../icon';
import type { DBButtonProps, DBButtonState } from './model';
import classNames from 'classnames';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: true,
		hasDisabledProp: true,
		hasOnClick: true,
		properties: [
			{ name: 'children', type: 'SingleLine.Text' },
			{
				name: 'variant',
				type: 'Enum',
				values: [
					{ key: 'Primary', name: 'Primary', value: 'primary' },
					{ key: 'Outlined', name: 'Outlined', value: 'outlined' },
					{
						key: 'Text',
						name: 'Text',
						value: 'text'
					},
					{
						key: 'Solid',
						name: 'Solid',
						value: 'solid'
					}
				]
			},
			{
				name: 'icon',
				type: 'Icon'
			},
			{ name: 'noText', type: 'TwoOptions' },
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
	// jscpd:ignore-start
	const state = useStore<DBButtonState>({
		handleClick: (event: any) => {
			if (props.onClick) {
				props.onClick(event);
			}
		},
		iconVisible: (icon?: string) => {
			return Boolean(icon && icon !== '_' && icon !== 'none');
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
		<button
			id={props.id}
			ref={component}
			class={state.getClassNames('db-button', props.className, {
				'is-icon-text-replace':
					state.iconVisible(props.icon) && props.noText
			})}
			type={props.type}
			title={props.title}
			disabled={props.disabled}
			aria-label={props.label}
			data-icon={state.iconVisible(props.icon) ? props.icon : undefined}
			data-size={props.size}
			data-state={props.state}
			data-width={props.width}
			data-variant={props.variant}
			name={props.name}
			value={props.value}
			aria-expanded={props.ariaexpanded}
			aria-pressed={props.ariapressed}
			onClick={(event) => state.handleClick(event)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}
		</button>
	);
}
