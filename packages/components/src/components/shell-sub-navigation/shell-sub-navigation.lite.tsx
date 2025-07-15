import {
	onInit,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBShellSubNavigationProps, DBShellSubNavigationState } from './model';
import { cls, getBoolean, getBooleanAsString } from '../../utils';
import DBButton from '../button/button.lite';
import DBTooltip from '../tooltip/tooltip.lite';
import { DEFAULT_COLLAPSE, DEFAULT_EXPAND } from '../../shared/constants';

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
			if (props.expandButtonTooltipFn) {
				return props.expandButtonTooltipFn(state._open);
			}
			if (props.expandButtonTooltip) {
				return props.expandButtonTooltip;
			}

			return state._open ? DEFAULT_COLLAPSE : DEFAULT_EXPAND;
		}
	});
	// jscpd:ignore-end

	onInit(() => {
		if (props.expanded !== undefined) {
			state._open = getBoolean(props.expanded, 'expanded') ?? true;
		}
	});

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
