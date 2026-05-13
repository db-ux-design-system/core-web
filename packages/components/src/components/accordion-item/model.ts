import {
	GlobalProps,
	InitializedState,
	NameProps,
	NameState,
	TextProps,
	ToggleEventProps,
	ToggleEventState
} from '../../shared/model';

export type DBAccordionItemDefaultProps = {
	/**
	 * Initial state for the accordion item
	 */
	defaultOpen?: boolean;
	/**
	 * State for the accordion item
	 */
	open?: boolean;
	/**
	 * The disabled attribute can be set to keep a user from clicking on the element.
	 */
	disabled?: boolean | string;
	/**
	 * Title of the accordion-item as slot
	 */
	headline?: any;
	/**
	 * Title of the accordion-item as plain text
	 */
	headlinePlain?: string;
} & TextProps;

export type DBAccordionItemProps = DBAccordionItemDefaultProps &
	GlobalProps &
	ToggleEventProps &
	NameProps;

export type DBAccordionItemDefaultState = {
	_open?: boolean;
};

export type DBAccordionItemState = DBAccordionItemDefaultState &
	ToggleEventState<HTMLElement> &
	InitializedState &
	NameState;
