import type {
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
	 * State for the accordion item. A controlled item has to follow `onToggle`,
	 * because the browser also closes it natively, e.g. when a sibling of an
	 * accordion with `behavior="single"` opens.
	 */
	open?: boolean | string;
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
	/**
	 * Synchronizes the internal open state with the native `open` property of
	 * the details element. The browser changes it without a click on our
	 * summary, e.g. when a sibling of an exclusive group (`name`) opens or
	 * when the parent accordion sets it via `initOpenIndex`. Reports such a
	 * change via `onToggle` and only writes the internal state when the item
	 * is uncontrolled (`open` is not set). Ignores toggle events of nested
	 * details elements, which React dispatches through its component tree.
	 */
	handleDetailsToggle: (event?: Event | any) => void;
};

export type DBAccordionItemState = DBAccordionItemDefaultState &
	ToggleEventState<HTMLElement> &
	InitializedState &
	NameState;
