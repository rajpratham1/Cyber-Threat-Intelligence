import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon issue with webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// Component to change map view
function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const MapView = ({ center, zoom }) => {
  const [threats, setThreats] = useState([]);

  useEffect(() => {
    const fetchThreats = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/threats`);
        const data = await response.json();
        if (data && data.data) {
          setThreats(data.data);
        }
      } catch (error) {
        console.error("Error fetching threats:", error);
      }
    };

    fetchThreats();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Live Attack Map</h2>
      <MapContainer center={center} zoom={zoom} style={{ height: '400px', width: '100%' }}>
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {threats.map((threat, index) => (
          threat.latitude && threat.longitude ? (
            <Marker key={index} position={[threat.latitude, threat.longitude]}>
              <Popup>
                IP: {threat.ipAddress} <br />
                Country: {threat.countryCode}
              </Popup>
            </Marker>
          ) : null
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
