import {
	GlobalProps,
	GlobalState,
	InitializedState,
	NameProps,
	NameState,
	TextProps,
	ToggleEventProps,
	ToggleEventState
} from '../../shared/model';

export type DBAccordionItemDefaultProps = {
	/**
	 * [ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the li element, generated automatically as a fallback if unset.
	 */
	idLi?: string;
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
	Omit<GlobalProps, 'id'> &
	ToggleEventProps &
	NameProps;

export type DBAccordionItemDefaultState = {
	_open?: boolean;
};

export type DBAccordionItemState = DBAccordionItemDefaultState &
	GlobalState &
	ToggleEventState<HTMLElement> &
	InitializedState &
	NameState;
