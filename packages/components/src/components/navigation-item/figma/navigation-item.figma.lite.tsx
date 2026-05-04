import { useMetadata } from '@builder.io/mitosis';
import { DBNavigationItem } from '../index';
import {
	FigmaNavigationItemProps,
	navigationItems
} from './navigation-item.figma';

useMetadata({
	figma: navigationItems
});

export default function NavigationItemFigmaLite(
	props: FigmaNavigationItemProps
) {
	return (
		<DBNavigationItem disabled={props.disabled} active={props.active}>
			<a href="#">Item</a>
		</DBNavigationItem>
	);
}
