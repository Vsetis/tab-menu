import React, { useCallback, useEffect, useMemo } from "react";
import FloorTabContent from "./floor-tab-content";
import FloorTabSettings from "./floor-tab-settings";
import { useRouter } from "next/router";

const floors = [
  { id: "floor-1", name: "Floor 1", elevation: 32 },
  { id: "floor-2", name: "Floor 2", elevation: 38 },
];

const FloorTab: React.FC = () => {
  const { query, push } = useRouter();
  const { floorId, buildingId } = query;

  const selectedFloor = useMemo(
    () => floors.find((f) => f.id === floorId) || floors[0],
    [floorId, floors]
  );

  const handleSave = useCallback(() => console.log("Save floor"), []);
  const handleDelete = useCallback(() => console.log("Delete floor"), []);

  useEffect(() => {
    if (selectedFloor && !floorId && buildingId) {
      push(`/${buildingId}/${selectedFloor.id}`);
    }
  }, []); // in main tabmenu layout is commented code which can be replaced for this effect because of empty depndency array

  if (selectedFloor.id !== floorId && buildingId) push(`/${buildingId}`);

  return (
    <>
      <FloorTabContent selectedFloor={selectedFloor} floors={floors} />
      {selectedFloor ? (
        <FloorTabSettings
          selectedFloor={selectedFloor}
          onDelete={handleDelete}
          onSave={handleSave}
          title={"Floor tab settings  "}
        />
      ) : null}
    </>
  );
};

export default FloorTab;
