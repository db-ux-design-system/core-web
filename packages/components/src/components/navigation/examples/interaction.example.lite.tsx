import { Fragment, useMetadata } from '@builder.io/mitosis';
import DBNavigationItem from '../../navigation-item/navigation-item.lite';
import DBNavigation from '../navigation.lite';
import { StorybookNavigationArgTypes } from './_navigation.arg.types';

useMetadata({
	storybookTitle: 'Interaction',
	storybookNames: ['Interaction'],
	storybookArgTypes: StorybookNavigationArgTypes
});

/**
 Fixture for the cross-framework interaction e2e tests
 (see showcases/e2e/navigation/navigation-interaction.spec.ts).
 A navigation item with a sub-navigation, so hovering/clicking its expand
 button (desktop / mobile) can be observed opening and closing.

 Wrapped in a Fragment (even with a single child) because the Storybook
 plugin reads its top-level story nodes from the wrapper's children - an
 unwrapped return would make DBNavigation's own children the story nodes
 instead of DBNavigation itself.
 */
export default function NavigationInteraction() {
	return (
		<Fragment>
			<DBNavigation>
				<DBNavigationItem
					data-testid="test1"
					subNavigation={
						<DBNavigationItem data-testid="sub1">
							<a href="#">Sub1</a>
						</DBNavigationItem>
					}>
					Test1
				</DBNavigationItem>
				<DBNavigationItem>
					<a href="#">Test2</a>
				</DBNavigationItem>
			</DBNavigation>
		</Fragment>
	);
}
