import {
	GlobalProps,
	GlobalState,
	ToggleEventProps,
	ToggleEventState
} from '../../shared/model';

export type DBAccordionItemDefaultProps = {
	/**
	 * Alternative for passing only a string instead of children
	 */
	content?: string;
	/**
	 * Initial state for the accordion item
	 */
	defaultOpen?: boolean;
	/**
	 * The disabled attribute can be set to keep a user from clicking on the element.
	 */
	disabled?: boolean;
	/**
	 * Title of the accordion-item as slot
	 */
	headline?: any;
	/**
	 * Title of the accordion-item as plain text
	 */
	headlinePlain?: string;
};

export type DBAccordionItemProps = DBAccordionItemDefaultProps &
	GlobalProps &
	ToggleEventProps;

export type DBAccordionItemDefaultState = {
	_open: boolean;
};

export type DBAccordionItemState = DBAccordionItemDefaultState &
	GlobalState &
	ToggleEventState<HTMLElement>;
