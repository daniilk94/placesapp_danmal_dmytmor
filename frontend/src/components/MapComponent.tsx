import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import type { PlacesProps } from '../interfaces.ts';
import type { CSSProperties } from 'react';

const Map = ({ places }: PlacesProps) => {
    const mapStyle: CSSProperties = {
        flex: 1,
        height: '100%',
    };
    return (
        <MapContainer style={mapStyle} center={[62.59, 29.77]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {places.map((p) => (
                <Marker key={p.ID} position={[p.Latitude, p.Longitude]}>
                    <Popup>
                        {p.Name}
                        {<br />}({p.Latitude.toFixed(4)},{' '}
                        {p.Longitude.toFixed(4)})
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
