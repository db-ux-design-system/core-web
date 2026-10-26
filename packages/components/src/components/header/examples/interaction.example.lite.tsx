import { useMetadata, useStore, useTarget } from '@builder.io/mitosis';
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

type HeaderInteractionState = {
	drawerOpen: boolean;
	// Built in one expression: Mitosis drops JSX whitespace such as {' '}
	getReadout: () => string;
	/*
	 * Not named setDrawerOpen: the React target derives a state setter of
	 * exactly that name from `drawerOpen`, which would collide.
	 *
	 * `open` is deliberately not typed as boolean either, because the Angular
	 * output declares the toggle output as `boolean | void` and a boolean
	 * parameter fails the template type check on `(toggle)="...($event)"`.
	 */
	updateDrawerOpen: (open: any) => void;
	suppressLinkNavigation: (event: any) => void;
};

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
	const state = useStore<HeaderInteractionState>({
		drawerOpen: false,
		getReadout: () => {
			return `Drawer state: ${state.drawerOpen ? 'open' : 'closed'}`;
		},
		updateDrawerOpen: (open: any) => {
			state.drawerOpen = Boolean(open);
		},
		/*
		 * The navigation link has to stay a bare `<a href="#">` (see the
		 * comment at the item), so its click cannot be cancelled on the anchor
		 * itself. Cancelling it here works because a default action only runs
		 * after the event finished propagating, and it keeps the showcase route
		 * intact. Restricted to anchors on purpose: the drawer's close button
		 * is an invoker whose `command` is also a click default action, and a
		 * blanket preventDefault would stop it from closing the drawer.
		 */
		suppressLinkNavigation: (event: any) => {
			if (event?.target?.closest?.('a')) {
				event.preventDefault();
			}
		}
	});

	return (
		<div onClick={(event) => state.suppressLinkNavigation(event)}>
			{/* Excluded from story generation: it has no nested DBHeader, so
			 * the Storybook plugin's component lookup for this story would
			 * fail on it. It still renders in the showcase/e2e output. */}
			<DBButton
				data-sb-ignore="true"
				data-testid="open-button"
				onClick={() => state.updateDrawerOpen(true)}>
				Open
			</DBButton>
			<span data-sb-ignore="true" data-testid="drawer-state">
				{state.getReadout()}
			</span>
			<DBHeader
				forceMobile="true"
				drawerHeaderText="Menu"
				closeButtonText="Close drawer"
				burgerMenuLabel="Open menu"
				drawerOpen={state.drawerOpen}
				onToggle={(open) => state.updateDrawerOpen(open)}
				brand={<DBBrand>DBHeader</DBBrand>}>
				<DBNavigation
					{...useTarget({
						angular: {
							'data-x': 'workaround-angular'
						},
						default: {}
					})}
					aria-label="Interaction">
					{/*
					 * The anchor must stay exactly `<a href="#">`, without
					 * further attributes: the Angular slots plugin adds
					 * `*dbNavigationContent` through a literal `a href="#"`
					 * string replace, and only that directive lets the link be
					 * projected into both the desktop bar and the drawer. With
					 * any extra attribute the replace misses and the link
					 * disappears from the drawer entirely.
					 */}
					<DBNavigationItem>
						<a href="#">Start</a>
					</DBNavigationItem>
				</DBNavigation>
			</DBHeader>
		</div>
	);
}
