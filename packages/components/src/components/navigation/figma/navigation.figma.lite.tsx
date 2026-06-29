import { useMetadata } from '@builder.io/mitosis';
import { DBNavigation } from '../index';
import { FigmaNavigationProps, navigations } from './navigation.figma';

useMetadata({
	figma: navigations
});

export default function NavigationFigmaLite(props: FigmaNavigationProps) {
	return <DBNavigation>{props._children}</DBNavigation>;
}
