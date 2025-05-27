import {
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
import { cls, uuid } from '../../utils';
import DBButton from '../button/button.lite';
import DBTooltip from '../tooltip/tooltip.lite';

useMetadata({});

useDefaultProps<DBControlPanelDesktopProps>({});

export default function DBControlPanelDesktop(
	props: DBControlPanelDesktopProps
) {
	const _ref = useRef<HTMLDivElement | any>(null);
	// jscpd:ignore-start
	const state = useStore<DBControlPanelDesktopState>({
		_id: `db-control-panel-desktop-${uuid()}`,
		_open: true,
		handleToggle: () => {
			state._open = !state._open;
		},
		getToggleButtonText: (): string => {
			return state._open
				? (props.leftPositionToggleButtonCollapse ?? 'Collapse')
				: (props.leftPositionToggleButtonExpand ?? 'Expand');
		}
	});

	// jscpd:ignore-end

	return (
		<header
			ref={_ref}
			class={cls('db-control-panel-desktop', props.className)}
			id={props.id ?? state._id}
			data-width={props.width}
			data-orientation={props.orientation}
			data-open={state._open}>
			<Slot name="metaNavigation" />
			<Slot name="brand" />
			{props.children}
			<Slot name="primaryActions" />
			<Slot name="secondaryActions" />
			<div className="db-control-panel-desktop-button">
				<DBButton
					onClick={(event) => state.handleToggle(event)}
					variant="ghost"
					aria-controls={props.id ?? state._id}
					aria-expanded={state._open}
					noText
					icon="chevron_left">
					<DBTooltip variant="label" placement="top">
						{state.getToggleButtonText()}
					</DBTooltip>
				</DBButton>
			</div>
		</header>
	);
}
