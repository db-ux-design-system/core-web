import {
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBControlPanelMobileProps, DBControlPanelMobileState } from './model';
import { cls } from '../../utils';
import { isEventTargetNavigationItem } from '../../utils/navigation';
import { DBDrawer } from '../drawer';
import DBButton from '../button/button.lite';
import { DEFAULT_BURGER_MENU } from '../../shared/constants';

useMetadata({});

useDefaultProps<DBControlPanelMobileProps>({});

export default function DBControlPanelMobile(props: DBControlPanelMobileProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBControlPanelMobileState>({
		open: false,
		handleToggle: () => {
			const reverseOpen = !state.open;
			state.open = reverseOpen;

			if (props.onToggle) {
				props.onToggle(reverseOpen);
			}
		},
		handleNavigationItemClick: (event: any) => {
			if (isEventTargetNavigationItem(event)) {
				state.handleToggle();
			}
		}
	});
	// jscpd:ignore-end

	return (
		<header
			ref={_ref}
			id={props.id}
			data-width={props.width}
			data-position={props.positon}
			class={cls('db-control-panel-mobile', props.className)}>
			<DBDrawer
				direction="custom"
				rounded
				spacing="small"
				open={state.open}
				onClose={() => state.handleToggle()}>
				<div
					onClick={(event) => {
						state.handleNavigationItemClick(event);
					}}
					class="db-control-panel-mobile-drawer-scroll-container">
					{props.children}
					<Slot name="metaNavigation" />
				</div>
				<Slot name="secondaryActions" />
			</DBDrawer>

			<Slot name="brand" />
			<Slot name="primaryActions" />
			<DBButton
				className="db-control-panel-mobile-button"
				id={state._id + '-burger-menu'}
				icon="menu"
				noText
				variant="ghost"
				onClick={() => state.handleToggle()}>
				{props.burgerMenuLabel ?? DEFAULT_BURGER_MENU}
			</DBButton>
		</header>
	);
}
