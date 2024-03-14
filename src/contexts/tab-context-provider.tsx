import React, { useState } from 'react';
import { TabContext } from './tab-context';
import { TabEnums } from '@/models/TabEnums';

const items = [
    { label: 'Home', value: TabEnums.Home },
    { label: 'About', value: TabEnums.About },
];

const TabContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [activeTab, setActiveTab] = useState<TabEnums>(TabEnums.Home);

    const tabContextValues = {
        activeTab,
        setActiveTab,
        items,
    };

    return (
        <TabContext.Provider value={tabContextValues}>
            {children}
        </TabContext.Provider>
    );
};

export default TabContextProvider;
