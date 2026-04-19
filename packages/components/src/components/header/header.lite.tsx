import {
	onMount,
	onUpdate,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DEFAULT_BURGER_MENU } from '../../shared/constants';
import { addAttributeToChildren, cls, delay, uuid } from '../../utils';
import { isEventTargetNavigationItem } from '../../utils/navigation';
import DBButton from '../button/button.lite';
import DBDrawer from '../drawer/drawer.lite';
import { DBHeaderProps, DBHeaderState } from './model';

useMetadata({});

useDefaultProps<DBHeaderProps>({});

export default function DBHeader(props: DBHeaderProps) {
	const _ref = useRef<HTMLDivElement | any>(null);
	const drawerRef = useRef<HTMLDialogElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBHeaderState>({
		initialized: false,
		forcedToMobile: false,
		generatedId: props.id ?? props.propOverrides?.id ?? `header-${uuid()}`,
		handleNavigationItemClick: (event: unknown) => {
			if (isEventTargetNavigationItem(event) && drawerRef) {
				const dialogContainerRef = drawerRef.querySelector(
					'.db-drawer-container'
				) as HTMLDivElement | null;

				if (dialogContainerRef) {
					dialogContainerRef.dataset['transition'] = 'close';
				}

				void delay(() => {
					if (drawerRef?.open) {
						drawerRef?.close();
					}
				}, 401);
			}
		}
	});

	onMount(() => {
		state.initialized = true;
	});

	onUpdate(() => {
		if (state.initialized && _ref && props.forceMobile) {
			// Adds this attribute to the header to enable all styling which would have
			// @media screen and (min-width: $db-screens-m) to show mobile navigation on a desktop device
			addAttributeToChildren(_ref, {
				key: 'data-force-mobile',
				value: 'true'
			});
			state.forcedToMobile = true;
		}
	}, [state.initialized, _ref]);

	// jscpd:ignore-end

	return (
		<header
			ref={_ref}
			class={cls('db-header', props.className)}
			id={props.id ?? props.propOverrides?.id ?? state.generatedId}
			data-width={props.width}
			data-on-forcing-mobile={props.forceMobile && !state.forcedToMobile}>
			<DBDrawer
				ref={drawerRef}
				class="db-header-drawer"
				id={`${props.id ?? props.propOverrides?.id ?? state.generatedId}-drawer`}
				rounded
				spacing="small"
				closeButtonId={props.closeButtonId}
				closeButtonText={props.closeButtonText}>
				<div class="db-header-drawer-navigation">
					<div
						class="db-header-navigation"
						onClick={(event) =>
							state.handleNavigationItemClick?.(event)
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
							icon="menu"
							noText
							variant="ghost"
							command="show-modal"
							commandfor={`${props.id ?? props.propOverrides?.id ?? state.generatedId}-drawer`}>
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
