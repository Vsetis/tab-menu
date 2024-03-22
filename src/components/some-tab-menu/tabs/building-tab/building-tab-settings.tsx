import React from "react";
import SettingsCard from "../../settings-card";
import { BuildingType } from "./building-tab-content";

interface BuildingTabSettingsProps {
  onDelete: () => void;
  onSave: () => void;
  title: string;
  selectedBuilding: BuildingType;
}

const BuildingTabSettings: React.FC<BuildingTabSettingsProps> = (
  props: BuildingTabSettingsProps
) => {
  const { onDelete, onSave, title, selectedBuilding } = props;

  return (
    <SettingsCard onDelete={onDelete} onSave={onSave} title={title}>
      <div>
        <h2 className="mb-2 font-semibold">Selected Building:</h2>
        <p>id: {selectedBuilding.id}</p>
        <p>name: {selectedBuilding.name}</p>
      </div>
    </SettingsCard>
  );
};

export default BuildingTabSettings;
