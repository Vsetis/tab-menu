import { TabEnums } from '@/models/TabEnums';
import { createContext } from 'react';

interface TabContext {
    activeTab: TabEnums;
    setActiveTab: (tab: TabEnums) => void;
    items: { label: string; value: TabEnums }[];
}

export const TabContext = createContext<TabContext | undefined>(undefined);
