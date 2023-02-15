import {
	onMount,
	Show,
	Slot,
	useMetadata,
	useStore
} from '@builder.io/mitosis';
import { DBHeaderState, DBHeaderProps } from './model';
import { DBDivider } from '../divider';
import { DBButton } from '../button';

useMetadata({
	isAttachedToShadowDom: true,
	component: {
		includeIcon: false,
		properties: []
	}
});

export default function DBHeader(props: DBHeaderProps) {
	const state = useStore<DBHeaderState>({
		drawerOpen: false
	});

	onMount(() => {
		if (props.stylePath) {
			state.stylePath = props.stylePath;
		}
	});

	return (
		<header
			class={'db-header' + (props.className ? ' ' + props.className : '')}
			role="banner">
			<Show when={state.stylePath}>
				<link rel="stylesheet" href={state.stylePath} />
			</Show>
			<Show when={state.drawerOpen}>
				<div
					class="db-header-drawer db-header-hide-on-desktop"
					data-drawer={state.drawerOpen ? 'open' : 'closed'}>
					<div class="db-header-drawer-backdrop"></div>
					<div class="db-header-drawer-container">
						<div class="db-header-drawer-content-menu"></div>
						<div class="db-header-drawer-content">
							<div class="db-header-navigation db-header-hide-on-desktop">
								{props.children}
							</div>
							<div class="db-header-meta-navigation db-header-hide-on-desktop">
								<Slot name="meta-navigation" />
							</div>
							<div class="db-header-action-bar db-header-hide-on-desktop">
								<Slot name="action-bar" />
							</div>
						</div>
					</div>
				</div>
			</Show>

			<div class="db-header-meta-navigation db-header-hide-on-mobile">
				<Slot name="meta-navigation" />
			</div>
			<div class="db-header-navigation-bar">
				<div class="db-header-brand-container">
					<Slot name="brand" />
					<DBDivider
						className="db-header-hide-on-mobile"
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
					<DBDivider variant="vertical" margin="none"></DBDivider>
					<div
						class="db-header-burger-menu db-header-hide-on-desktop"
						data-drawer={state.drawerOpen ? 'open' : 'closed'}>
						<DBButton
							icon={state.drawerOpen ? 'close' : 'menu'}
							variant="ghost"
							onClick={() => {
								state.drawerOpen = !state.drawerOpen;
							}}>
							Burger Menu
						</DBButton>
					</div>
					<div class="db-header-action-bar db-header-hide-on-mobile">
						<Slot name="action-bar" />
					</div>
				</div>
			</div>
		</header>
	);
}
