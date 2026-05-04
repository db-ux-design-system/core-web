import { useMetadata } from '@builder.io/mitosis';
import { DBNavigationItem } from '../../navigation-item/index';
import { DBNavigation } from '../index';
import { mobileNavigation } from './navigation.figma';

useMetadata({
	figma: mobileNavigation
});

export default function MobileNavigationFigmaLite() {
	return (
		<DBNavigation>
			<DBNavigationItem>
				<a href="#">Item 1</a>
			</DBNavigationItem>
			<DBNavigationItem>
				<a href="#">Item 2</a>
			</DBNavigationItem>
		</DBNavigation>
	);
}
