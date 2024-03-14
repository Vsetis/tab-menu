import React from 'react';
import useTabContext from '@/hooks/use-tab-context';
import { TabEnums } from '@/models/TabEnums';
import TabMenu from '../tab-menu';
import HomeTab from './tabs/home-tab/home-tab';
import AboutTab from './tabs/about-tab/about-tab';

const tabs = {
    [TabEnums.Home]: HomeTab,
    [TabEnums.About]: AboutTab,
};

const TabMenuLayout = () => {
    const { activeTab, items, setActiveTab } = useTabContext();
    const CurrentTab = tabs[activeTab];
    return (
        <div className="bg-white/10 h-screen w-max p-4">
            <TabMenu
                items={items}
                activeItem={activeTab}
                onItemChange={(item: TabEnums) => setActiveTab(item)}
            />
            <div className="py-8 flex flex-col justify-between h-[500px]">
                <CurrentTab />
            </div>
        </div>
    );
};

export default TabMenuLayout;
