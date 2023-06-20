import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import { DBNavigationItemState, DBNavigationItemProps } from './model';
import classNames from 'classnames';
import { DBButton } from '../button';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: false,
		properties: []
	}
});

export default function DBNavigationItem(props: DBNavigationItemProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBNavigationItemState>({
		handleClick: (event: any) => {
			if (props.onClick) {
				props.onClick(event);
			}
		},
		handleActionClick: (event: any) => {
			event.stopPropagation();
			if (props.action?.onClick) {
				props.action.onClick(event);
			}
			event.preventDefault();
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
		<div
			class={state.getClassNames('db-navigation-item', props.className)}
			data-width={props.width}>
			<button
				class="db-navigation-item-button"
				ref={component}
				data-icon={
					state.iconVisible(props.icon) ? props.icon : undefined
				}
				data-icon-after={
					state.iconVisible(props.iconAfter)
						? props.iconAfter
						: undefined
				}
				data-active={props.active}
				data-width={props.width}
				disabled={props.disabled}
				onClick={(event) => state.handleClick(event)}>
				<Show when={state.stylePath}>
					<link rel="stylesheet" href={state.stylePath} />
				</Show>
				{props.children}
			</button>
			<Show when={props.action}>
				<DBButton
					noText
					variant="text"
					icon={props.action.icon}
					title={props.action.text || props.action.icon}
					onClick={(event) => state.handleActionClick(event)}>
					{props.action.text || props.action.icon}
				</DBButton>
			</Show>
		</div>
	);
}
