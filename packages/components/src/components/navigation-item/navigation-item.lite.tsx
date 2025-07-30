import {
	Slot,
	useDefaultProps,
	useMetadata,
	useRef
} from '@builder.io/mitosis';
import { DEFAULT_LABEL } from '../../shared/constants';
import { cls, getBooleanAsString } from '../../utils';
import DBTooltip from '../tooltip/tooltip.lite';
import { DBNavigationItemProps } from './model';

useMetadata({});

useDefaultProps<DBNavigationItemProps>({});

export default function DBNavigationItem(props: DBNavigationItemProps) {
	const _ref = useRef<HTMLLIElement | any>(null);

	return (
		<li
			ref={_ref}
			id={props.id}
			class={cls('db-navigation-item', props.className)}
			data-icon={props.icon}
			data-show-icon={getBooleanAsString(props.showIcon)}
			data-active={getBooleanAsString(props.active)}
			aria-disabled={getBooleanAsString(props.disabled)}>
			{props.children}
			<Slot name="additionalInformation"></Slot>
			<DBTooltip placement="right" delay="slow">
				{props.tooltip ?? DEFAULT_LABEL}
			</DBTooltip>
		</li>
	);
}
