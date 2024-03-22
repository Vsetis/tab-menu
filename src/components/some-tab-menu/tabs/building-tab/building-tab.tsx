import React, { useMemo } from "react";
import BuildingTabContent from "./building-tab-content";
import BuildingTabSettings from "./building-tab-settings";
import { useRouter } from "next/router";

const BuildingTab: React.FC = () => {
  const { query, push } = useRouter();
  const { buildingId } = query;

  const data = {
    buildings: [
      {
        id: "building-1",
        name: "building 1",
        elevation: 32,
      },
      {
        id: "building-2",
        name: "building 2",
        elevation: 5,
      },
    ],
  };

  const selectedBuilding = useMemo(
    () => data.buildings.find((b) => b.id === buildingId),
    [buildingId]
  );

  const handleDelete = () => {
    console.log("Delete building");
  };
  const handleSave = () => {
    console.log("Save building");
  };

  if (!selectedBuilding && buildingId) push("/");

  return (
    <>
      <BuildingTabContent
        buildingId={buildingId ? String(buildingId) : undefined}
        data={data}
      />
      {selectedBuilding ? (
        <BuildingTabSettings
          selectedBuilding={selectedBuilding}
          onDelete={handleDelete}
          onSave={handleSave}
          title="Bulding tab settings"
        />
      ) : null}
    </>
  );
};

export default BuildingTab;
