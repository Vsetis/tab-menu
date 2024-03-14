import React from 'react';

interface ItemInterface<T> {
    label: string;
    value: T;
}

interface TabMenuProps<T> {
    items: ItemInterface<T>[];
    activeItem: T;
    onItemChange: (item: T) => void;
}

const TabMenu = <T,>({ items, activeItem, onItemChange }: TabMenuProps<T>) => {
    const handleTabChange = (item: T) => {
        onItemChange(item);
    };

    return (
        <div className="flex gap-8">
            {items.map((item) => (
                <button
                    key={item.label}
                    className={
                        activeItem === item.value
                            ? 'font-bold bg-black'
                            : 'font-light'
                    }
                    onClick={() => handleTabChange(item.value)}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
};

export default TabMenu;
