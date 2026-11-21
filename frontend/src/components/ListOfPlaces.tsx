import type { CSSProperties } from 'react';
import type { PlacesProps } from '../interfaces.ts';
import ListElement from './ListElement.tsx';

const ListOfPlaces = ({ places }: PlacesProps) => {
    const listStyle: CSSProperties = {
        width: '30%',
        minWidth: '250px',
        height: '100%',
        overflowY: 'auto',
        margin: 0,
        padding: '16px',
        boxSizing: 'border-box',
        listStyle: 'none',
    };
    return (
        <ul style={listStyle}>
            {places.map((p) => (
                <ListElement key={p.ID} name={p.Name} />
            ))}
        </ul>
    );
};

export default ListOfPlaces;
