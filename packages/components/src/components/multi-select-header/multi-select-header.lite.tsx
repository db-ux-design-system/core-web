import {
	onUpdate,
	Show,
	useDefaultProps,
	useMetadata,
	useRef,
	useStore
} from '@builder.io/mitosis';
import { DBMultiSelectHeaderProps, DBMultiSelectHeaderState } from './model';
import { cls, delay, uuid } from '../../utils';
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
		},
		handleSearch: (event: ChangeEvent<HTMLInputElement>) => {
			if (props.onSearch) {
				props.onSearch(event);
			}
		},
		handleClose: () => {
			if (props.onClose) {
				props.onClose();
			}
		},
		handleSelectAll: (event: ChangeEvent<HTMLInputElement>) => {
			if (props.onSelectAll) {
				props.onSelectAll(event);
			}
		},
		handleCloseKeydown: (event: KeyboardEvent) => {
			if (event.code === 'Space' || event.key === 'Enter') {
				if (event.target) {
					const details = (event.target as HTMLElement).closest(
						'details'
					);
					if (details) {
						delay(() => {
							details.querySelector('summary')?.focus();
						}, 100);
					}
				}
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
			<div class="db-checkbox">
				<label htmlFor={state._id + '-select-all'}>
					{/*We set a form name based on id for not sending checkboxes to a wrapping form */}
					<input
						ref={selectAllRef}
						id={state._id + '-select-all'}
						form={state._id}
						class="db-multi-select-header-select-all"
						type="checkbox"
						value="select-all"
						checked={props.checked}
						onInput={(event: ChangeEvent<HTMLInputElement>) =>
							state.handleSelectAll(event)
						}
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
					onInput={(event: ChangeEvent<HTMLInputElement>) =>
						state.handleSearch(event)
					}
				/>
			</Show>
			<DBButton
				id={props.closeButtonId}
				icon="cross"
				variant="ghost"
				type="button"
				noText
				onKeyDown={(event: KeyboardEvent) =>
					state.handleCloseKeydown(event)
				}
				onClick={() => state.handleClose()}>
				{props.closeButtonText ?? DEFAULT_CLOSE_BUTTON}
				<DBTooltip placement="right">
					{props.closeButtonText ?? DEFAULT_CLOSE_BUTTON}
				</DBTooltip>
			</DBButton>
		</header>
	);
}
