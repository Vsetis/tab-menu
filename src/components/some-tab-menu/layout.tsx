import React, { useCallback, useEffect, useMemo } from "react";
import useTabContext from "@/hooks/use-tab-context";
import { TabEnums } from "@/models/TabEnums";
import TabMenu from "../tab-menu";
import { useRouter } from "next/router";
import BuildingTab from "./tabs/building-tab/building-tab";
import FloorTab from "./tabs/floor-tab/floor-tab";

const tabs = {
  [TabEnums.Building]: BuildingTab,
  [TabEnums.Floor]: FloorTab,
};

// const floors = [
//   { id: "floor-1", name: "Floor 1", elevation: 32 },
//   { id: "floor-2", name: "Floor 2", elevation: 38 },
// ];

const TabMenuLayout = () => {
  const { activeTab, items, setActiveTab } = useTabContext();
  const CurrentTab = tabs[activeTab];
  const { query, push } = useRouter();
  const { buildingId, floorId } = query;

  // const selectedFloor = useMemo(
  //   () => floors.find((f) => f.id === floorId) || floors[0],
  //   [floorId, floors]
  // );

  const disabled = useMemo(() => {
    return {
      [TabEnums.Building]: false,
      [TabEnums.Floor]: !buildingId,
    };
  }, [buildingId]);

  useEffect(() => {
    if (buildingId) {
      setActiveTab(TabEnums.Building);
    }
    if (floorId) {
      setActiveTab(TabEnums.Floor);
    }
  }, [buildingId, floorId, setActiveTab]);

  const handleItemChange = useCallback(
    (item: TabEnums) => {
      setActiveTab(item);
      if (item === TabEnums.Building && floorId) {
        push(`/${buildingId}`);
      }
      if (item === TabEnums.Building && !buildingId) {
        push("/");
      }
      // if (item === TabEnums.Floor && !floorId && buildingId) {
      //   push(`/${buildingId}/${selectedFloor.id}`);
      // }
    },
    [push, buildingId, setActiveTab]
  );

  return (
    <div className="bg-white/10 h-screen w-full">
      <TabMenu
        disabled={disabled}
        items={items}
        activeItem={activeTab}
        onItemChange={handleItemChange}
      />
      <div className="flex flex-col justify-between h-[calc(100vh-64px)]">
        <CurrentTab />
      </div>
    </div>
  );
};

export default TabMenuLayout;
