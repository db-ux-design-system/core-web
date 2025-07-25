import {
	onInit,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore,
	useTarget
} from '@builder.io/mitosis';
import { DEFAULT_COLLAPSE, DEFAULT_EXPAND } from '../../shared/constants';
import { cls, getBoolean, getBooleanAsString, uuid } from '../../utils';
import DBButton from '../button/button.lite';
import DBTooltip from '../tooltip/tooltip.lite';
import { DBShellSubNavigationProps, DBShellSubNavigationState } from './model';

useMetadata({});

useDefaultProps<DBShellSubNavigationProps>({});

export default function DBShellSubNavigation(props: DBShellSubNavigationProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLDivElement | any>(undefined);
	// jscpd:ignore-start
	const state = useStore<DBShellSubNavigationState>({
		_id: `db-shell-sub-navigation-${uuid()}`,
		_open: true,
		handleToggle: (event: any) => {
			event.stopPropagation();

			state._open = !state._open;
		},
		getToggleButtonText: (): string => {
			if (props.expandButtonTooltip) {
				return props.expandButtonTooltip;
			}
			const fnOutput = useTarget({
				angular: () => undefined,
				stencil: () => undefined,
				default: () => {
					if (props.onExpandButtonTooltipFn) {
						const open = state._open;
						return props.onExpandButtonTooltipFn(open);
					}
				}
			});

			return (
				fnOutput() ?? (state._open ? DEFAULT_COLLAPSE : DEFAULT_EXPAND)
			);
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
			id={props.id ?? state._id}
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
					icon="double_chevron_left">
					<DBTooltip variant="label" placement="right">
						{state.getToggleButtonText()}
					</DBTooltip>
				</DBButton>
			</div>
		</div>
	);
}
