'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// import { useEffect } from 'react'; // Removed unused import

type MapProps = {
    center: [number, number];
    zoom: number;
    locations: {
        id: number;
        city: string;
        address: string;
        phone: string;
        coords: [number, number]; // [lat, lng]
    }[];
};

const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

const Map = ({ center, zoom, locations }: MapProps) => {
    return (
        <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {locations.map((loc) => (
                <Marker key={loc.id} position={loc.coords} icon={customIcon}>
                    <Popup>
                        <div className="text-sm">
                            <strong className="block text-dark mb-1">{loc.city}</strong>
                            <p className="text-gray-600 mb-0">{loc.address}</p>
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Map;
