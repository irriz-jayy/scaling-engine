import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Maps = () => {
  const markers = [
    {
      geocode: [0.5377, 35.2468],
      popUp: "Chutney bites, Rupa Mall",
    },
    {
      geocode: [0.5176, 35.2781],
      popUp: "Chutney bites, Zion Mall",
    },
    { geocode: [0.521, 35.2653], popUp: "Chutney bites, Highlands Mall" },
  ];
  return (
    <MapContainer center={[0.5143, 35.2698]} zoom={13} className="h-screen">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((marker) => (
        <Marker position={marker.geocode}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Maps;
