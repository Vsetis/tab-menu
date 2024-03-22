import React from "react";

interface ItemInterface<T> {
  label: string;
  value: T;
}

interface TabMenuProps<T> {
  items: ItemInterface<T>[];
  activeItem: T;
  onItemChange: (item: T) => void;
  disabled?: Record<string, boolean>;
}

const TabMenu = <T,>({
  items,
  disabled,
  activeItem,
  onItemChange,
}: TabMenuProps<T>) => {
  const handleTabChange = (item: T) => {
    onItemChange(item);
  };

  return (
    <div className="flex  bg-white/10">
      {items.map((item) => (
        <button
          key={item.label}
          disabled={disabled?.[item.value] || false}
          className={`${
            activeItem === item.value ? "font-bold bg-black/50" : "font-light"
          } p-4`}
          onClick={() => handleTabChange(item.value)}>
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default TabMenu;
