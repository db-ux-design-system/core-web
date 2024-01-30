import {
	GlobalProps,
	GlobalState,
	ToggleEventProps,
	ToggleEventState
} from '../../shared/model';

export interface DBAccordionItemDefaultProps {
	/**
	 * Alternative for passing only a string instead of children
	 */
	content?: string;
	/**
	 * The disabled attribute can be set to keep a user from clicking on the element.
	 */
	disabled?: boolean;
	/**
	 * Initial state for the accordion item
	 */
	open?: boolean;
	/**
	 * Title of the accordion-item
	 */
	title?: any;
	/**
	 * Set details name for exclusive accordions, see https://chromestatus.com/feature/6710427028815872
	 */
	name?: string;
}

export type DBAccordionItemProps = DBAccordionItemDefaultProps &
	GlobalProps &
	ToggleEventProps;

export interface DBAccordionItemDefaultState {}

export type DBAccordionItemState = DBAccordionItemDefaultState &
	GlobalState &
	ToggleEventState<HTMLElement>;
