import {
	Show,
	useMetadata,
	useStore,
	useRef,
	useDefaultProps, Slot
} from '@builder.io/mitosis';
import { DBControlPanelMobileState, DBControlPanelMobileProps } from './model';
import { cls, getBoolean } from '../../utils';
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
		handleToggle: () => {
			const open = !getBoolean(props.drawerOpen, 'drawerOpen');

			if (props.onToggle) {
				props.onToggle(open);
			}
		},
		handleNavigationItemClick: (event: unknown) => {
			/*if (isEventTargetNavigationItem(event)) {
				state.handleToggle();
			}*/
		}
	});
	// jscpd:ignore-end

	return (
		<header
			ref={_ref}
			id={props.id}
			data-width={props.width}
			class={cls('db-control-panel-mobile', props.className)}>
			<DBDrawer
				class="db-control-panel-mobile-drawer"
				rounded
				spacing="small"
				open={getBoolean(props.drawerOpen)}
				onClose={() => state.handleToggle()}>
				<div className="db-control-panel-mobile-drawer-navigation">
					<div
						className="db-control-panel-mobile-navigation"
						onClick={(event) =>
							state.handleNavigationItemClick(event)
						}>
						{props.children}
					</div>
					<div className="db-control-panel-mobile-meta-navigation">
						<Slot name="metaNavigation" />
					</div>
				</div>
				<div className="db-control-panel-mobile-secondary-action">
					<Slot name="secondaryAction" />
				</div>
			</DBDrawer>

			<div className="db-control-panel-mobile-navigation-bar">
				<div className="db-control-panel-mobile-control-panel-brand-container">
					<Slot name="control-panel-brand" />
				</div>
				<div className="db-control-panel-mobile-navigation-container">
					<div className="db-control-panel-mobile-primary-action">
						<Slot name="primaryAction" />
					</div>
				</div>
				<div className="db-control-panel-mobile-action-container">
					<div className="db-control-panel-mobile-burger-menu-container">
						<DBButton
							id={state._id + '-burger-menu'}
							icon="menu"
							noText
							variant="ghost"
							onClick={() => state.handleToggle()}>
							{props.burgerMenuLabel ?? DEFAULT_BURGER_MENU}
						</DBButton>
					</div>
				</div>
			</div>
		</header>
	);
}
