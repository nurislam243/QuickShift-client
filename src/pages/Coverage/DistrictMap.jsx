import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useLoaderData } from 'react-router';

// Fix Leaflet marker icon
L.Marker.prototype.options.icon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const FlyToDistrict = ({ districts, searchText }) => {
  const map = useMap();

  useEffect(() => {
    if (!searchText) return;

    const match = districts.find((d) =>
      d.district.toLowerCase().includes(searchText.toLowerCase())
    );

    if (match) {
      map.flyTo([match.latitude, match.longitude], 10, { duration: 1.5 });
    }
  }, [searchText, districts, map]);

  return null;
};

const DistrictMap = ({ searchText }) => {
  const districts = useLoaderData();
  const center = [23.685, 90.3563];

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
      <MapContainer center={center} zoom={7} scrollWheelZoom className="h-full w-full">
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FlyToDistrict districts={districts} searchText={searchText} />

        {districts.map((d, i) => (
          <Marker key={i} position={[d.latitude, d.longitude]}>
            <Popup>
              <strong>{d.district}</strong><br />
              City: {d.city}<br />
              Areas: {d.covered_area.join(', ')}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default DistrictMap;
