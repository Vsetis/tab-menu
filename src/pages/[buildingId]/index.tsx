import { useRouter } from "next/router";
import React from "react";

const Building = () => {
  const { query } = useRouter();
  const { buildingId } = query;

  if (!buildingId) return null;

  return (
    <div>
      <p>BuildingId: {buildingId}</p>
    </div>
  );
};

export default Building;
