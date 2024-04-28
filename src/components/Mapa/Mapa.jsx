import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./Style.css";
import "leaflet/dist/leaflet.css";

function Mapa() {
    return (
        <div className="map-container">
            <div className="map-inner-container">
                <MapContainer center={[-22.951804, -43.210760]} zoom={13} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[-22.951804, -43.210760]}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
};

export default Mapa;
