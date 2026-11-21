import { useState, useEffect } from 'react';
import type { Place } from '../../backend/src/types';
import 'leaflet/dist/leaflet.css';
import MainDisplay from './components/MainDisplay';

const App = () => {
    const [places, setPlaces] = useState<Place[]>([]);

    useEffect(() => {
        const getAllPlaces = async () => {
            const data = await fetch(
                import.meta.env.VITE_SERVER_URL + '/api/places',
            );
            const obj = await data.json();
            setPlaces(obj);
        };
        getAllPlaces();
    }, []);

    return (
        <div>
            <MainDisplay places={places} />
        </div>
    );
};

export default App;
