import {
	onMount,
	onUpdate,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DEFAULT_BURGER_MENU, DEFAULT_ID } from '../../shared/constants';
import { addAttributeToChildren, cls, getBoolean, uuid } from '../../utils';
import { isEventTargetNavigationItem } from '../../utils/navigation';
import DBButton from '../button/button.lite';
import DBDrawer from '../drawer/drawer.lite';
import { DBHeaderProps, DBHeaderState } from './model';

useMetadata({});

useDefaultProps<DBHeaderProps>({});

export default function DBHeader(props: DBHeaderProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBHeaderState>({
		_id: DEFAULT_ID,
		initialized: false,
		forcedToMobile: false,
		handleToggle: (event?: any) => {
			if (event && event.stopPropagation) {
				event.stopPropagation();
			}

			const open = !getBoolean(props.drawerOpen, 'drawerOpen');

			if (props.onToggle) {
				props.onToggle(open);
			}
		},
		handleNavigationItemClick: (event: unknown) => {
			if (isEventTargetNavigationItem(event)) {
				state.handleToggle();
			}
		}
	});

	onMount(() => {
		state.initialized = true;
		state._id = props.id || 'header-' + uuid();
	});

	onUpdate(() => {
		if (state.initialized && document && state._id && props.forceMobile) {
			const headerElement = document.getElementById(
				state._id ?? ''
			) as HTMLElement;
			if (headerElement) {
				// Adds this attribute to the header to enable all styling which would have
				// @media screen and (min-width: $db-screens-m) to show mobile navigation on a desktop device
				addAttributeToChildren(headerElement, {
					key: 'data-force-mobile',
					value: 'true'
				});
			}
			state.forcedToMobile = true;
		}
	}, [state.initialized]);

	// jscpd:ignore-end

	return (
		<header
			ref={_ref}
			class={cls('db-header', props.className)}
			id={state._id}
			data-width={props.width}
			data-on-forcing-mobile={props.forceMobile && !state.forcedToMobile}>
			<DBDrawer
				class="db-header-drawer"
				rounded
				spacing="small"
				open={getBoolean(props.drawerOpen)}
				onClose={() => state.handleToggle()}>
				<div class="db-header-drawer-navigation">
					<div
						class="db-header-navigation"
						onClick={(event) =>
							state.handleNavigationItemClick(event)
						}>
						{props.children}
					</div>
					<div class="db-header-meta-navigation">
						<Slot name="metaNavigation" />
					</div>
				</div>
				<div class="db-header-secondary-action">
					<Slot name="secondaryAction" />
				</div>
			</DBDrawer>

			<div class="db-header-meta-navigation">
				<Slot name="metaNavigation" />
			</div>
			<div class="db-header-navigation-bar">
				<div class="db-header-brand-container">
					<Slot name="brand" />
				</div>
				<div class="db-header-navigation-container">
					<div class="db-header-navigation">{props.children}</div>
					<div class="db-header-primary-action">
						<Slot name="primaryAction" />
					</div>
				</div>
				<div class="db-header-action-container">
					<div class="db-header-burger-menu-container">
						<DBButton
							id={state._id + '-burger-menu'}
							icon="menu"
							noText
							variant="ghost"
							onClick={() => state.handleToggle()}>
							{props.burgerMenuLabel ?? DEFAULT_BURGER_MENU}
						</DBButton>
					</div>
					<div class="db-header-secondary-action">
						<Slot name="secondaryAction" />
					</div>
				</div>
			</div>
		</header>
	);
}
