import { createContext } from '@builder.io/mitosis';

export interface DBTabsContextType {
	activeTabIndex: number;
	activateTab: (index: number) => void;
}

export const DBTabsContext = createContext<DBTabsContextType>({
	activeTabIndex: 0,
	activateTab: () => {}
});
