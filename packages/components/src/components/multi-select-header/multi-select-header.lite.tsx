import {
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBMultiSelectHeaderProps, DBMultiSelectHeaderState } from './model';
import { cls, uuid } from '../../utils';
import { DBTooltip } from '../tooltip';
import { DBInput } from '../input';
import { DEFAULT_CLOSE_BUTTON, DEFAULT_LABEL } from '../../shared/constants';
import { ChangeEvent } from '../../shared/model';
import { DBButton } from '../button';

useMetadata({});

useDefaultProps<DBMultiSelectHeaderProps>({});

export default function DBMultiSelectHeader(props: DBMultiSelectHeaderProps) {
	// This is used as forwardRef
	const _ref = useRef<HTMLElement>(null);
	const selectAllRef = useRef<HTMLInputElement>(null);
	// jscpd:ignore-start
	const state = useStore<DBMultiSelectHeaderState>({
		_id: 'multi-select-header' + uuid(),
		getSelectAllLabel: () => {
			if (!selectAllRef) return props.selectAllLabel ?? DEFAULT_LABEL;
			if (selectAllRef.indeterminate || !props.checked) {
				return props.selectAllLabel ?? DEFAULT_LABEL;
			} else {
				return props.deSelectAllLabel ?? DEFAULT_LABEL;
			}
		}
	});
	// jscpd:ignore-end

	onUpdate(() => {
		if (selectAllRef) {
			selectAllRef.indeterminate = Boolean(props.indeterminate);
		}
	}, [props.indeterminate]);

	return (
		<header
			ref={_ref}
			id={props.id}
			data-variant={props.variant}
			class={cls('db-multi-select-header', props.className)}>
			<div className="db-checkbox" data-variant="hidden">
				<label htmlFor={state._id + '-select-all'}>
					{/*We set a form name based on id for not sending checkboxes to a wrapping form */}
					<input
						ref={selectAllRef}
						id={state._id + '-select-all'}
						form={state._id}
						type="checkbox"
						value="select-all"
						checked={props.checked}
						onChange={(event: ChangeEvent<HTMLInputElement>) => {
							props.onSelectAll?.(event);
						}}
					/>
					{state.getSelectAllLabel()}
					<DBTooltip placement="left">
						{state.getSelectAllLabel()}
					</DBTooltip>
				</label>
			</div>
			<Show when={props.variant === 'search'}>
				<DBInput
					type="search"
					variant="floating"
					label={props.searchLabel ?? DEFAULT_LABEL}
					placeholder={props.searchPlaceholder}
					onChange={(event: ChangeEvent<HTMLInputElement>) => {
						props.onSearch?.(event);
					}}
				/>
			</Show>
			<DBButton
				id={props.closeButtonId}
				icon="cross"
				variant="ghost"
				type="button"
				noText
				onClick={() => {
					if (props.onClose) {
						props.onClose();
					}
				}}>
				{props.closeButtonText ?? DEFAULT_CLOSE_BUTTON}
				<DBTooltip placement="right">
					{props.closeButtonText ?? DEFAULT_CLOSE_BUTTON}
				</DBTooltip>
			</DBButton>
		</header>
	);
}
