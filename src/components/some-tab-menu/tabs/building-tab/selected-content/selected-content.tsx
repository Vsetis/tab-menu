import Link from "next/link";
import React from "react";

const floors = [
  { id: "floor-1", name: "Floor 1" },
  { id: "floor-2", name: "Floor 2" },
];

const SelectedContent = ({ buildingId }: { buildingId: string }) => {
  return (
    <>
      <Link
        className="w-full mb-8 flex text-black justify-center rounded font-semibold text-sm hover:bg-white/60 transition-all py-2 bg-white"
        href="/">
        Go back
      </Link>
      <div>
        <h1 className="mb-4 text-xl">Vyberte patro</h1>
        <div className="flex flex-col gap-2">
          {floors.map((floor) => (
            <Link
              key={floor.id}
              className="hover:text-white/70"
              href={`/${buildingId}/${floor.id}`}>
              {floor.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SelectedContent;
