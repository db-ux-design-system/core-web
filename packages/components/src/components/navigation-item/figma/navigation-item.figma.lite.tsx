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
		<DBNavigationItem>
			<a href="https://wikipedia.org/wiki/Easter_Egg">{props.text}</a>
		</DBNavigationItem>
	);
}
