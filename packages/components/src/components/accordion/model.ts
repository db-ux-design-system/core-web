import {
	GlobalProps,
	GlobalState,
	InitializedState,
	ItemClickState
} from '../../shared/model';
import { DBAccordionItemDefaultProps } from '../accordion-item/model';

export interface DBAccordionItemInterface
	extends Omit<DBAccordionItemDefaultProps, 'slotTitle'> {}
export interface DBAccordionDefaultProps {
	/**
	 * To allow multiple items open at the same time or only 1 item
	 */
	behaviour?: 'multiple' | 'single';

	/**
	 * The index of items which should be open when loading the accordion
	 */
	initOpenIndex?: number[];

	/**
	 * Alternative to pass in a simple representation of accordion items
	 */
	items?: DBAccordionItemInterface[] | string;

	/**
	 * Informs about the changes in the internal state, which item is open
	 */
	onChange?: (openAccordionItemIds: string[]) => void;
}

export type DBAccordionProps = DBAccordionDefaultProps & GlobalProps;

export interface DBAccordionDefaultState {
	openItems: string[];
	convertItems: (items?: any[] | string) => DBAccordionItemInterface[];
}

export type DBAccordionState = DBAccordionDefaultState &
	GlobalState &
	InitializedState &
	ItemClickState;
