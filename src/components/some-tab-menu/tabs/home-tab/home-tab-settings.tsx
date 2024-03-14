import React from 'react';
import SettingsCard from '../../settings-card';

interface HomeTabSettingsProps {
    onDelete: () => void;
    onSave: () => void;
    title: string;
}

const HomeTabSettings: React.FC<HomeTabSettingsProps> = (
    props: HomeTabSettingsProps
) => {
    const { onDelete, onSave, title } = props;

    return (
        <SettingsCard onDelete={onDelete} onSave={onSave} title={title}>
            <div>home Tab</div>
        </SettingsCard>
    );
};

export default HomeTabSettings;
