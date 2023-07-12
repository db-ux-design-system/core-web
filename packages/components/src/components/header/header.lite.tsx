import {
	onMount,
	Show,
	Slot,
	useMetadata,
	useStore
} from '@builder.io/mitosis';
import { DBHeaderState, DBHeaderProps } from './model';
import { cls } from "../../utils";
import { DBDivider } from '../divider';
import { DBButton } from '../button';
import { DBDrawer } from '../drawer';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		// MS Power Apps
		includeIcon: false,
		properties: [{ name: 'drawerOpen', type: 'TwoOptions' }]
	}
});

export default function DBHeader(props: DBHeaderProps) {
	// This is used as forwardRef
	let component: any;
	// jscpd:ignore-start
	const state = useStore<DBHeaderState>({
		toggle: () => {
			if (props.onToggle) {
				props.onToggle(!props.drawerOpen);
			}
		}
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});
	// jscpd:ignore-end

	return (
		<header
			ref={component}
			class={cls('db-header', props.className)}
			role="banner">
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>

			<DBDrawer
				className="db-header-drawer db-header-hide-on-desktop"
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

			<div class="db-header-meta-navigation db-header-hide-on-mobile">
				<Slot name="meta-navigation" />
			</div>
			<div class="db-header-navigation-bar">
				<div class="db-header-brand-container">
					<Slot name="brand" />
					<DBDivider
						className="db-header-divider db-header-hide-on-mobile"
						variant="vertical"></DBDivider>
				</div>
				<div class="db-header-navigation-container">
					<div class="db-header-navigation db-header-hide-on-mobile">
						{props.children}
					</div>
					<div class="db-header-call-to-action">
						<Slot name="call-to-action" />
					</div>
				</div>
				<div class="db-header-action-container">
					<DBDivider
						className="db-header-divider"
						variant="vertical"
						margin="none"></DBDivider>
					<DBButton
						id="button-burger-menu"
						className="db-header-hide-on-desktop"
						icon="menu"
						noText
						variant="text"
						onClick={() => state.toggle()}>
						Burger Menu
					</DBButton>
					<div class="db-header-action-bar db-header-hide-on-mobile">
						<Slot name="action-bar" />
					</div>
				</div>
			</div>
		</header>
	);
}
