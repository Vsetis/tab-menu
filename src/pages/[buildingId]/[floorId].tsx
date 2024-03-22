import { useRouter } from "next/router";
import React from "react";

const Floor = () => {
  const { query } = useRouter();
  const { floorId } = query;

  if (!floorId) return null;

  return (
    <div>
      <p>floorId: {floorId}</p>
    </div>
  );
};

export default Floor;
