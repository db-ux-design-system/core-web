import {
	Slot,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { DBNavigationItemProps } from './model';
import { cls, getBooleanAsString, getHideProp } from '../../utils';
import DBTooltip from '../tooltip/tooltip.lite';
import { DEFAULT_LABEL } from '../../shared/constants';

useMetadata({});

useDefaultProps<DBNavigationItemProps>({});

export default function DBNavigationItem(props: DBNavigationItemProps) {
	const _ref = useRef<HTMLLIElement | any>(null);

	return (
		<li
			ref={_ref}
			id={props.id}
			class={cls('db-navigation-item', props.className)}
			data-width={props.width}
			data-icon={props.icon}
			data-hide-icon={getHideProp(props.showIcon)}
			data-active={getBooleanAsString(props.active)}
			data-pride={getBooleanAsString(props.pride)}
			data-wrap={getBooleanAsString(props.wrap)}
			aria-disabled={getBooleanAsString(props.disabled)}>
			{props.children}
			<Slot name="additionalInformation"></Slot>
			<DBTooltip placement="right">
				{props.tooltip ?? DEFAULT_LABEL}
			</DBTooltip>
		</li>
	);
}
