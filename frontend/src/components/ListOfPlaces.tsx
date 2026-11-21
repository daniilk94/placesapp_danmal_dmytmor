import type { CSSProperties } from 'react';
import type { PlacesProps } from '../interfaces.ts';

const ListOfPlaces = ({ places }: PlacesProps) => {
    const listStyle: CSSProperties = {
        width: '30%',
        minWidth: '250px',
        height: '100%',
        overflowY: 'auto',
        margin: 0,
        padding: '16px',
        boxSizing: 'border-box',
    };
    return (
        <ul style={listStyle}>
            {places.map((p) => (
                <li key={p.ID}>
                    {p.Name} ({p.Latitude.toFixed(4)}, {p.Longitude.toFixed(4)})
                </li>
            ))}
        </ul>
    );
};

export default ListOfPlaces;
