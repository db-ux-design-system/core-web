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
	headline?: unknown;
	/**
	 * Title of the accordion-item as plain text
	 */
	headlinePlain?: string;
	/**
	 * Set details name for exclusive accordions, see https://chromestatus.com/feature/6710427028815872
	 */
	name?: string;
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
