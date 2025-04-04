import {
	GlobalProps,
	GlobalState,
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
	ToggleEventProps;

export type DBAccordionItemDefaultState = {
	_open: boolean;
};

export type DBAccordionItemState = DBAccordionItemDefaultState &
	GlobalState &
	ToggleEventState<HTMLElement>;
