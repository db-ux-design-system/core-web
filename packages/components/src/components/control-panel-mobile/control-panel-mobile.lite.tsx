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
import DBDrawerFooter from '../drawer-footer/drawer-footer.lite';
import DBDrawerHeader from '../drawer-header/drawer-header.lite';
import DBDrawer from '../drawer/drawer.lite';
import { DBControlPanelMobileProps, DBControlPanelMobileState } from './model';

useMetadata({});

useDefaultProps<DBControlPanelMobileProps>({});

export default function DBControlPanelMobile(props: DBControlPanelMobileProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(null);
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
		handleClose: (event: any) => {
			if (event.stopPropagation) {
				event.stopPropagation();
			}

			state.open = false;

			if (props.onToggle) {
				props.onToggle(false);
			}
		},
		handleNavigationItemClick: (event: any) => {
			if (isEventTargetNavigationItem(event)) {
				state.handleClose(event);
			}
		}
	});
	// jscpd:ignore-end

	return (
		<header
			ref={_ref}
			id={props.id ?? props.propOverrides?.id}
			data-position={props.position}
			data-density="regular"
			class={cls('db-control-panel-mobile', props.className)}>
			<DBDrawer
				header={<DBDrawerHeader text={props.drawerHeaderText} />}
				className="db-control-panel-mobile-drawer"
				rounded
				open={state.open}
				onClose={(event) => state.handleClose(event)}
				footer={
					<DBDrawerFooter>
						<Slot name="secondaryActions" />
					</DBDrawerFooter>
				}>
				<div
					onClick={(event) => state.handleNavigationItemClick(event)}
					class="db-control-panel-mobile-drawer-scroll-container">
					{props.children}
					<Slot name="metaNavigation" />
				</div>
			</DBDrawer>
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
