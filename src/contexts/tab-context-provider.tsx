import React, { useState } from "react";
import { TabContext } from "./tab-context";
import { TabEnums } from "@/models/TabEnums";

const items = [
  { label: "Objekty", value: TabEnums.Building },
  { label: "Patra", value: TabEnums.Floor },
];

const TabContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState<TabEnums>(TabEnums.Building);

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
