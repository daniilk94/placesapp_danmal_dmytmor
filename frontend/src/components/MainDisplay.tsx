import ListOfPlaces from './ListOfPlaces';
import MapComponent from './MapComponent';
import type { PlacesProps } from '../interfaces.ts';
import type { CSSProperties } from 'react';

const MainDisplay = ({ places }: PlacesProps) => {
    const containerStyle: CSSProperties = {
        display: 'flex',
        width: '100%',
        height: '100dvh',
    };
    return (
        <div style={containerStyle}>
            <MapComponent places={places} />
            <ListOfPlaces places={places} />
        </div>
    );
};

export default MainDisplay;
