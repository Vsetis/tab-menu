import React, { useCallback } from "react";
import ContentCard from "../../content-card";
import { useRouter } from "next/router";
import Link from "next/link";

export type FloorType = {
  id: string;
  name: string;
  elevation: number;
};

interface FloorTabContentProps {
  floors: FloorType[];
  selectedFloor: FloorType;
}

const FloorTabContent: React.FC<FloorTabContentProps> = (
  props: FloorTabContentProps
) => {
  const { floors, selectedFloor } = props;
  const { query, push } = useRouter();
  const { buildingId } = query;

  const handleFloorChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const floorId = e.target.value;
      push(`/${buildingId}/${floorId}`);
    },
    [push, buildingId]
  );

  return (
    <ContentCard>
      <Link
        className="w-full mb-8 flex text-black justify-center rounded font-semibold text-sm hover:bg-white/60 transition-all py-2 bg-white"
        href={`/${buildingId}`}>
        Go back to building
      </Link>
      <select
        onChange={handleFloorChange}
        defaultValue={selectedFloor.id}
        className="text-black w-full py-2 px-2 font-semibold">
        {floors.map((floor) => (
          <option key={floor.id} value={floor.id}>
            {floor.name}
          </option>
        ))}
      </select>
    </ContentCard>
  );
};

export default FloorTabContent;
