import React, { Children, PropsWithChildren } from 'react';

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
        <div className="bg-blue-500 p-5">
            <div className="flex justify-between gap-8 mb-12">
                <h1>{title}</h1>
                <div className="flex gap-4">
                    <button onClick={onDelete}>Delete</button>
                    <button onClick={onSave}>Save</button>
                </div>
            </div>
            {children}
        </div>
    );
};

export default SettingsCard;
