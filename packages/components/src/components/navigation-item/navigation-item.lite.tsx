import {
	onMount,
	onUpdate,
	Show,
	Slot,
	useMetadata,
	useStore
} from '@builder.io/mitosis';
import { DBNavigationItemProps, DBNavigationItemState } from './model';
import { cls, uuid } from '../../utils';

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
		hideSubNavigation: false,
		subNavigationId: 'sub-navigation-' + uuid(),
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
				} else {
					state.hideSubNavigation = true;
				}
			}
		}
	}, [state.initialized]);

	// jscpd:ignore-end

	return (
		<li
			ref={component}
			role={state.hasAreaPopup ? 'button' : ''}
			aria-haspopup={state.hasAreaPopup}
			class={cls('db-navigation-item', props.className)}
			data-width={props.width}
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

			<Show when={state.hideSubNavigation}>
				<menu className="db-sub-navigation" id={state.subNavigationId}>
					<Slot name="sub-navigation"></Slot>
				</menu>
			</Show>
		</li>
	);
}
