import { GlobalProps, GlobalState, InitializedState } from '../../shared/model';
import { DBAccordionItemDefaultProps } from '../accordion-item/model';

export const AccordionVariantList = ['divider', 'card'] as const;
export type AccordionVariantType = (typeof AccordionVariantList)[number];

export const AccordionBehaviorList = ['multiple', 'single'] as const;
export type AccordionBehaviorType = (typeof AccordionBehaviorList)[number];

export type DBAccordionDefaultProps = {
	/**
	 * [ID](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id) of the ul element, generated automatically as a fallback if unset.
	 */
	idUl?: string;
	/**
	 * To allow multiple items open at the same time or only 1 item
	 */
	behavior?: AccordionBehaviorType;
	/**
	 * The index of items which should be open when loading the accordion
	 */
	initOpenIndex?: number[];

	/**
	 * Alternative to pass in a simple representation of accordion items
	 */
	items?: DBAccordionItemDefaultProps[] | string;

	/**
	 * Set details name for exclusive accordions, see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details#name
	 */
	name?: string;

	/**
	 * Informs about the changes in the internal state, which item is open
	 */
	onChange?: (openAccordionItemIds: string[]) => void;

	/**
	 * Defines the display of the accordion and the items:
	 * "divider": with a dividing line between the items
	 * "card": w/o dividing line, but items are shown in the card variant
	 */
	variant?: AccordionVariantType;
};

export type DBAccordionProps = DBAccordionDefaultProps &
	Omit<GlobalProps, 'id'>;

export type DBAccordionDefaultState = {
	_initOpenIndexDone: boolean;
	_name?: string;
	convertItems: () => DBAccordionItemDefaultProps[];
};

export type DBAccordionState = DBAccordionDefaultState &
	GlobalState &
	InitializedState;
