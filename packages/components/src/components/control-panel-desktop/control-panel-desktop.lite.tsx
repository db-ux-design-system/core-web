import {
	onMount,
	onUpdate,
	Slot,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import {
	DBControlPanelDesktopProps,
	DBControlPanelDesktopState
} from './model';
import { addAttributeToChildren, cls, getBoolean, uuid } from '../../utils';
import DBButton from '../button/button.lite';
import DBDrawer from '../drawer/drawer.lite';
import { DEFAULT_BURGER_MENU, DEFAULT_ID } from '../../shared/constants';
import { isEventTargetNavigationItem } from '../../utils/navigation';

useMetadata({});

useDefaultProps<DBControlPanelDesktopProps>({});

export default function DBControlPanelDesktop(
	props: DBControlPanelDesktopProps
) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBControlPanelDesktopState>({});

	// jscpd:ignore-end

	return (
		<header
			ref={_ref}
			class={cls('db-control-panel-desktop', props.className)}
			id={props.id}
			data-width={props.width}
			data-orientation={props.orientation}>
			<Slot name="metaNavigation" />
			<Slot name="brand" />
			{props.children}
			<Slot name="primaryActions" />
			<Slot name="secondaryActions" />
		</header>
	);
}
