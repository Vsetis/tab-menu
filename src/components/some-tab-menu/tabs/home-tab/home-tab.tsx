import React from 'react';
import HomeTabContent from './home-tab-content';
import HomeTabSettings from './home-tab-settings';

const HomeTab = () => {
    const data = {
        id: 'home-tab',
        title: 'Home Tab',
        description: 'This is the home tab',
        floors: [
            {
                id: 'floor-1',
                name: 'Floor 1',
                elevation: 0,
            },
            {
                id: 'floor-2',
                name: 'Floor 2',
                elevation: 10,
            },
        ],
    };

    //HomeTab logic here
    const handleDelete = () => {
        console.log('Delete');
    };
    const handleSave = () => {
        console.log('Save');
    };

    return (
        <>
            <HomeTabContent data={data} />
            <HomeTabSettings
                onDelete={handleDelete}
                onSave={handleSave}
                title="Home Tab Settings"
            />
        </>
    );
};

export default HomeTab;
