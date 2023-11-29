import {
	onMount,
	onUpdate,
	Show,
	Slot,
	useMetadata, useRef,
	useStore
} from '@builder.io/mitosis';
import { DBHeaderState, DBHeaderProps } from './model';
import { addAttributeToChildren, cls, uuid } from '../../utils';
import { DBButton } from '../button';
import { DBDrawer } from '../drawer';
import { DEFAULT_ID } from '../../shared/constants';

useMetadata({
	isAttachedToShadowDom: true
});

export default function DBHeader(props: DBHeaderProps) {
	const ref = useRef<HTMLDivElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBHeaderState>({
		_id: DEFAULT_ID,
		initialized: false,
		forcedToMobile: false,
		defaultValues: {
			burgerMenuLabel: 'BurgerMenu'
		},
		toggle: () => {
			if (props.onToggle) {
				props.onToggle(!props.drawerOpen);
			}
		}
	});

	onMount(() => {
		state.initialized = true;
		state._id = props.id || 'header-' + uuid();
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	onUpdate(() => {
		if (state.initialized && document && state._id && props.forceMobile) {
			const headerElement = document.getElementById(
				state._id
			) as HTMLElement;
			if (headerElement) {
				// Adds this attribute to the header to enable all styling which would have
				// @media screen and (min-width: $db-screens-m) to show mobile navigation on a desktop device
				addAttributeToChildren(headerElement, {
					key: 'force-mobile',
					value: ''
				});
			}
			state.forcedToMobile = true;
		}
	}, [state.initialized]);

	// jscpd:ignore-end

	return (
		<header
			ref={ref}
			class={cls('db-header', props.className)}
			id={state._id}
			data-on-forcing-mobile={props.forceMobile && !state.forcedToMobile}>
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<DBDrawer
				data-hide-on="desktop"
				className="db-header-drawer"
				rounded
				withCloseButton
				spacing="small"
				open={props.drawerOpen}
				onClose={() => state.toggle()}>
				<div class="db-header-drawer-navigation">
					<div class="db-header-navigation">{props.children}</div>
					<div class="db-header-meta-navigation">
						<Slot name="meta-navigation" />
					</div>
				</div>
				<div class="db-header-action-bar">
					<Slot name="action-bar" />
				</div>
			</DBDrawer>

			<div class="db-header-meta-navigation" data-hide-on="mobile">
				<Slot name="meta-navigation" />
			</div>
			<div class="db-header-navigation-bar">
				<div class="db-header-brand-container">
					<Slot name="brand" />
				</div>
				<div class="db-header-navigation-container">
					<div class="db-header-navigation" data-hide-on="mobile">
						{props.children}
					</div>
					<div class="db-header-call-to-action">
						<Slot name="call-to-action" />
					</div>
				</div>
				<div class="db-header-action-container">
					<div data-hide-on="desktop">
						<DBButton
							id="button-burger-menu"
							icon="menu"
							noText
							variant="text"
							onClick={() => state.toggle()}>
							{props.burgerMenuLabel ??
								state.defaultValues.burgerMenuLabel}
						</DBButton>
					</div>
					<div class="db-header-action-bar" data-hide-on="mobile">
						<Slot name="action-bar" />
					</div>
				</div>
			</div>
		</header>
	);
}
