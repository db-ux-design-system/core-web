import { GlobalProps, GlobalState, InitializedState } from '../../shared/model';
import { DBAccordionItemDefaultProps } from '../accordion-item/model';

export interface DBAccordionItemInterface
	extends Omit<DBAccordionItemDefaultProps, 'slotTitle'> {}
export interface DBAccordionDefaultProps {
	behaviour?: 'multiple' | 'single';

	items?: DBAccordionItemInterface[] | string;
}

export type DBAccordionProps = DBAccordionDefaultProps & GlobalProps;

export interface DBAccordionDefaultState {
	clickedId: string;
	openItems: string[];
	handleItemClick: (id: string) => void;
	convertItems: (items?: any[] | string) => DBAccordionItemInterface[];
}

export type DBAccordionState = DBAccordionDefaultState &
	GlobalState &
	InitializedState;
