import {
	Show,
	useMetadata,
	useStore,
	useRef,
	useDefaultProps,
	Slot
} from '@builder.io/mitosis';
import { DBShellSubNavigationState, DBShellSubNavigationProps } from './model';
import { cls, getBooleanAsString } from '../../utils';
import DBButton from '../button/button.lite';
import DBTooltip from '../tooltip/tooltip.lite';

useMetadata({});

useDefaultProps<DBShellSubNavigationProps>({});

export default function DBShellSubNavigation(props: DBShellSubNavigationProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBShellSubNavigationState>({
		_open: true,
		handleToggle: (event: any) => {
			event.stopPropagation();

			state._open = !state._open;
		},
		getToggleButtonText: (): string => {
			return state._open
				? (props.subNavigationToggleButtonCollapse ?? 'Collapse')
				: (props.subNavigationToggleButtonExpand ?? 'Expand');
		}
	});
	// jscpd:ignore-end

	return (
		<div
			ref={_ref}
			id={props.id}
			data-open={getBooleanAsString(state._open)}
			class={cls('db-shell-sub-navigation', props.className)}>
			{props.children}
			<div class="db-shell-sub-navigation-button">
				<DBButton
					onClick={(event) => state.handleToggle(event)}
					variant="ghost"
					aria-controls={props.id ?? state._id}
					aria-expanded={getBooleanAsString(state._open)}
					noText
					icon="chevron_left">
					<DBTooltip variant="label" placement="right">
						{state.getToggleButtonText()}
					</DBTooltip>
				</DBButton>
			</div>
		</div>
	);
}
