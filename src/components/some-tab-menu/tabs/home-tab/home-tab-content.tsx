import React from 'react';

type Floor = {
    id: string;
    name: string;
    elevation: number;
};

interface HomeTabContentProps {
    data: {
        id: string;
        title: string;
        description: string;
        floors: Floor[];
    };
}

const HomeTabContent: React.FC<HomeTabContentProps> = (
    props: HomeTabContentProps
) => {
    const { data } = props;

    return (
        <div>
            <h1>{data.title}</h1>
            {data.floors.map((floor) => (
                <div key={floor.id}>
                    <h2>{floor.name}</h2>
                    <p>{floor.elevation}</p>
                </div>
            ))}
        </div>
    );
};

export default HomeTabContent;
