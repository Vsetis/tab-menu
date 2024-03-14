import React from 'react';
import SettingsCard from '../../settings-card';

const AboutTabSettings = () => {
    return (
        <SettingsCard
            onDelete={() => console.log('Settings delete')}
            onSave={() => console.log('Settings save')}
            title="About Tab Settings"
        >
            AboutTabSettings
        </SettingsCard>
    );
};

export default AboutTabSettings;
