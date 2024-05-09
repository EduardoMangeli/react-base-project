import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

import "./Style.css";
import "leaflet/dist/leaflet.css";


const customIconUrl = process.env.PUBLIC_URL + 'imagens/icons/marker-icon.png';

const customIcon = L.icon({
  iconUrl: customIconUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

function Mapa({ pontos }) {
    return (
        <div className="map-container">
            <div className="map-inner-container">
                <MapContainer center={[-22.951804, -43.210760]} zoom={11} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {pontos.map(e => (
                      <Marker key={e.id} position={[e.latitude, e.longitude]} icon={customIcon}>
                        <Popup className="custom-popup">
                            <div className="popup-content">
                                <div className="popup-text">
                                    <h3>{e.nome}</h3>
                                    <p>{e.popupContent}</p>
                                </div>
                                <img src={`${process.env.PUBLIC_URL}${e.imagem}`}/>
                            </div>
                        </Popup>
                      </Marker>
                    ))}
                </MapContainer>
            </div>
        </div>
    )
};

export default Mapa;