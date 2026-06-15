import {
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DEFAULT_BURGER_MENU } from '../../shared/constants';
import { cls } from '../../utils';
import { isEventTargetNavigationItem } from '../../utils/navigation';
import DBButton from '../button/button.lite';
import DBDrawer from '../drawer/drawer.lite';
import { DBControlPanelMobileProps, DBControlPanelMobileState } from './model';

useMetadata({});

useDefaultProps<DBControlPanelMobileProps>({});

export default function DBControlPanelMobile(props: DBControlPanelMobileProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBControlPanelMobileState>({
		open: false,
		handleToggle: (event: any) => {
			if (event.stopPropagation) {
				event.stopPropagation();
			}

			const reverseOpen = !state.open;
			state.open = reverseOpen;

			if (props.onToggle) {
				props.onToggle(reverseOpen);
			}
		},
		handleNavigationItemClick: (event: any) => {
			if (isEventTargetNavigationItem(event)) {
				state.handleToggle(event);
			}
		}
	});
	// jscpd:ignore-end

	return (
		<header
			ref={_ref}
			id={props.id}
			data-width={props.width}
			data-position={props.position}
			data-variant={props.variant}
			data-density="regular"
			class={cls('db-control-panel-mobile', props.className)}>
			<DBDrawer
				drawerHeaderPlain={props.drawerHeadlinePlain}
				direction="custom"
				rounded
				spacing="small"
				open={state.open}
				onClose={(event) => state.handleToggle(event)}>
				<div
					onClick={(event) => state.handleNavigationItemClick(event)}
					class="db-control-panel-mobile-drawer-scroll-container">
					{props.children}
					<Slot name="metaNavigation" />
				</div>
				<Slot name="secondaryActions" />
			</DBDrawer>
			<Slot name="flatIconNavigation" />
			<Slot name="brand" />
			<Slot name="primaryActions" />
			<DBButton
				class="db-control-panel-mobile-button"
				icon="menu"
				noText
				type="button"
				variant="ghost"
				onClick={(event) => state.handleToggle(event)}>
				{props.burgerMenuLabel ?? DEFAULT_BURGER_MENU}
			</DBButton>
		</header>
	);
}
