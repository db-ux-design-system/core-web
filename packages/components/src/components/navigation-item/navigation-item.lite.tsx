import {
	onMount,
	onUpdate,
	Show,
	Slot,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBNavigationItemState, DBNavigationItemProps } from './model';
import classNames from 'classnames';
import { DBButton } from '../button';
import { uuid } from '../../utils';
import { DEFAULT_ID } from '../../shared/constants';

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
		initialized: false,
		hasAreaPopup: false,
		subNavigationId: 'sub-navigation-' + uuid(),
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
		state.initialized = true;
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	onUpdate(() => {
		if (state.initialized && document && state.subNavigationId) {
			const subNavigationSlot = document?.getElementById(
				state.subNavigationId
			) as HTMLMenuElement;
			if (subNavigationSlot) {
				const children = subNavigationSlot.children;
				if (children?.length > 0) {
					state.hasAreaPopup = true;
				}
			}
		}
	}, [state.initialized]);

	// jscpd:ignore-end

	return (
		<li
			ref={component}
			aria-haspopup={state.hasAreaPopup}
			class={state.getClassNames('db-navigation-item', props.className)}
			data-width={props.width}
			tabIndex={props.tabIndex || -1}
			data-main-menu={props.isMainMenuItem}
			data-icon={state.iconVisible(props.icon) ? props.icon : undefined}
			data-icon-after={
				state.iconVisible(props.iconAfter) ? props.iconAfter : undefined
			}
			aria-current={props.active ? 'page' : undefined}
			data-disabled={props.disabled}
			onClick={(event) => state.handleClick(event)}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			{props.children}

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

			<menu class="db-sub-navigation" id={state.subNavigationId}>
				<Slot name="sub-navigation"></Slot>
			</menu>

			<div class="active-indicator" />
		</li>
	);
}
