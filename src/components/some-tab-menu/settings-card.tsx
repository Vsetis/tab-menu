import React, { PropsWithChildren } from "react";

interface SettingsCardProps {
  onDelete: () => void;
  onSave: () => void;
  title: string;
}

const SettingsCard: React.FC<PropsWithChildren<SettingsCardProps>> = (
  props: PropsWithChildren<SettingsCardProps>
) => {
  const { onDelete, onSave, title, children } = props;
  return (
    <div className="bg-zinc-700 p-5">
      <div className="flex items-center justify-between gap-8 mb-4">
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex gap-4">
          <button
            className="text-red-500 bg-red-500/20 px-4 py-2 hover:bg-red-500/40 transition-all"
            onClick={onDelete}>
            Delete
          </button>
          <button
            className="text-blue-500 bg-blue-500/20 px-4 py-2 hover:bg-blue-500/40 transition-all"
            onClick={onSave}>
            Save
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default SettingsCard;
