import React from "react";
import SettingsCard from "../../settings-card";
import { FloorType } from "./floor-tab-content";
import { useRouter } from "next/router";

interface FloorTabSettingsProps {
  onDelete: () => void;
  onSave: () => void;
  title: string;
  selectedFloor: FloorType | undefined;
}

const FloorTabSettings: React.FC<FloorTabSettingsProps> = (
  props: FloorTabSettingsProps
) => {
  const { onDelete, onSave, title, selectedFloor } = props;
  const { push } = useRouter();

  if (!selectedFloor) {
    push("/");
    return null;
  }

  return (
    <SettingsCard onDelete={onDelete} onSave={onSave} title={title}>
      <p>id: {selectedFloor.id}</p>
      <p>name: {selectedFloor.name}</p>
      <p>elevation: {selectedFloor.elevation}</p>
    </SettingsCard>
  );
};

export default FloorTabSettings;
