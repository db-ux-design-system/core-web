import { useMetadata, useState, useTarget } from '@builder.io/mitosis';
import DBBrand from '../../brand/brand.lite';
import DBButton from '../../button/button.lite';
import DBNavigationItem from '../../navigation-item/navigation-item.lite';
import DBNavigation from '../../navigation/navigation.lite';
import DBHeader from '../header.lite';
import { StorybookHeaderArgTypes } from './_header.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookHeaderArgTypes,
	storybookOverwriteArgs: {
		drawerOpen: false
	}
});

/**
 Fixture for the cross-framework interaction e2e tests
 (see showcases/e2e/header/header-interaction.spec.ts).

 A fully controlled DBHeader: `drawerOpen` is owned by this example and
 `onToggle` writes it back, which is the usage pattern that regressed in #8498.
 The reported value is rendered into `drawer-state` so the test can assert what
 the component emitted, not just what the dialog ended up doing.

 `forceMobile` keeps the drawer reachable on a desktop viewport, so the test
 does not depend on a mobile breakpoint.
 */
export default function HeaderInteraction() {
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

	return (
		<div>
			{/* Excluded from story generation: these have no nested DBHeader, so
			 * the Storybook plugin's component lookup for this story would
			 * fail on them. They still render in the showcase/e2e output. */}
			<DBButton
				data-sb-ignore="true"
				data-testid="open-button"
				onClick={() => setDrawerOpen(true)}>
				Open
			</DBButton>
			<span data-sb-ignore="true" data-testid="drawer-state">
				{drawerOpen ? 'open' : 'closed'}
			</span>
			<DBHeader
				forceMobile="true"
				drawerHeaderText="Menu"
				closeButtonText="Close drawer"
				drawerOpen={drawerOpen}
				onToggle={(open) => setDrawerOpen(open)}
				brand={<DBBrand>DBHeader</DBBrand>}
				secondaryAction={
					/* A consumer-owned action that closes through the state.
					 * It lives in the drawer footer because an element outside
					 * the modal dialog cannot be clicked while it is open. */
					<DBButton
						data-testid="state-close-button"
						variant="ghost"
						onClick={() => setDrawerOpen(false)}>
						Close from consumer
					</DBButton>
				}>
				<DBNavigation
					{...useTarget({
						angular: {
							'data-x': 'workaround-angular'
						},
						default: {}
					})}
					aria-label="Interaction">
					<DBNavigationItem>
						{/* The click must reach DBHeader's drawer handler, but
						 * the navigation itself would change the showcase route
						 * in some targets, so it is suppressed here. */}
						<a
							data-testid="navigation-link"
							href="#"
							onClick={(event) => event.preventDefault()}>
							Start
						</a>
					</DBNavigationItem>
				</DBNavigation>
			</DBHeader>
		</div>
	);
}
