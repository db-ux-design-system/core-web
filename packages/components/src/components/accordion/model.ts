import { GlobalProps, GlobalState, InitializedState } from '../../shared/model';
import { DBAccordionItemDefaultProps } from '../accordion-item/model';

export const AccordionVariantList = ['card'] as const;
export type AccordionVariantType = (typeof AccordionVariantList)[number];

export const AccordionBehaviourList = ['multiple', 'single'] as const;
export type AccordionBehaviourType = (typeof AccordionBehaviourList)[number];

export type DBAccordionDefaultProps = {
	/**
	 * To allow multiple items open at the same time or only 1 item
	 */
	behaviour?: AccordionBehaviourType;
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
	 * "default": with a dividing line between the items
	 * "card": w/o dividing line, but items are shown in the card variant
	 */
	variant?: AccordionVariantType;
};

export type DBAccordionProps = DBAccordionDefaultProps & GlobalProps;

export type DBAccordionDefaultState = {
	_initOpenIndexDone: boolean;
	_name: string;
	convertItems: (items?: unknown[] | string) => DBAccordionItemDefaultProps[];
};

export type DBAccordionState = DBAccordionDefaultState &
	GlobalState &
	InitializedState;
