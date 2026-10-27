import { useMetadata, useStore, useTarget } from '@builder.io/mitosis';
import DBBrand from '../../brand/brand.lite';
import DBButton from '../../button/button.lite';
import DBDrawerHeader from '../../drawer-header/drawer-header.lite';
import DBNavigationItem from '../../navigation-item/navigation-item.lite';
import DBNavigation from '../../navigation/navigation.lite';
import DBHeader from '../header.lite';
import { StorybookHeaderArgTypes } from './_header.arg.types';

useMetadata({
	storybookTitle: 'Custom Header',
	storybookNames: ['With action element in drawer header'],
	storybookArgTypes: StorybookHeaderArgTypes,
	storybookOverwriteArgs: {
		drawerOpen: false
	}
});

type HeaderCustomHeaderState = {
	drawerOpen: boolean;
	/*
	 * Not named setDrawerOpen: the React target derives a state setter of
	 * exactly that name from `drawerOpen`, which would collide.
	 *
	 * `open` is deliberately not typed as boolean either, because the Angular
	 * output declares the toggle output as `boolean | void` and a boolean
	 * parameter fails the template type check on `(toggle)="...($event)"`.
	 */
	updateDrawerOpen: (open: any) => void;
};

export default function HeaderCustomHeader() {
	const state = useStore<HeaderCustomHeaderState>({
		drawerOpen: false,
		updateDrawerOpen: (open: any) => {
			state.drawerOpen = Boolean(open);
		}
	});

	return (
		<div>
			<DBButton
				data-sb-ignore="true"
				onClick={() => state.updateDrawerOpen(true)}>
				Open
			</DBButton>
			<DBHeader
				forceMobile="true"
				burgerMenuLabel="Open menu"
				drawerOpen={state.drawerOpen}
				onToggle={(open) => state.updateDrawerOpen(open)}
				brand={<DBBrand>DBHeader</DBBrand>}
				drawerHeader={
					<DBDrawerHeader
						text="Menu"
						closeButtonText="Close"
						endSlot={
							<DBButton
								icon="moon"
								variant="ghost"
								noText
								type="button">
								Dark mode
							</DBButton>
						}
					/>
				}>
				<DBNavigation
					{...useTarget({
						angular: { 'data-x': 'workaround-angular' },
						default: {}
					})}
					aria-label="With action element in drawer header">
					<DBNavigationItem>
						<a href="#">With action element in drawer header</a>
					</DBNavigationItem>
				</DBNavigation>
			</DBHeader>
		</div>
	);
}
