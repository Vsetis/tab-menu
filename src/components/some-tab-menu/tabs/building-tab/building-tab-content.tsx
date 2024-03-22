import React from "react";
import ContentCard from "../../content-card";
import SelectedContent from "./selected-content/selected-content";
import Link from "next/link";

export type BuildingType = {
  id: string;
  name: string;
};

interface HomeTabContentProps {
  buildingId?: string;
  data: {
    buildings: BuildingType[];
  };
}

const BuildingTabContent: React.FC<HomeTabContentProps> = (
  props: HomeTabContentProps
) => {
  const { data, buildingId } = props;

  return (
    <ContentCard>
      {!buildingId ? (
        <>
          <h1 className="text-xl mb-4">Vyberte budovu</h1>
          <div className="flex flex-col gap-2">
            {data.buildings.map((building) => (
              <Link
                key={building.id}
                className="hover:text-white/70 transition-all"
                href={`/${building.id}`}>
                {building.name}
              </Link>
            ))}
          </div>
        </>
      ) : (
        <SelectedContent buildingId={String(buildingId)} />
      )}
    </ContentCard>
  );
};

export default BuildingTabContent;
