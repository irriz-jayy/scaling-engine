import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-cluster";
import Navbar from "../components/Navbar";

const Maps = () => {
  const markers = [
    {
      geocode: [0.5138, 35.2907],
      popUp: "Chutney bites, Rupa Mall",
    },
    {
      geocode: [0.5176, 35.2781],
      popUp: "Chutney bites, Zion Mall",
    },
    { geocode: [0.521, 35.2653], popUp: "Chutney bites, Highlands Mall" },
  ];
  return (
    <>
      <Navbar />
      <MapContainer center={[0.5176, 35.2781]} zoom={14} className="h-60 w-96">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Allows grouping of markers when zoomed out to avoid crowding */}
        <MarkerClusterGroup chunkedLoading>
          {markers.map((marker) => (
            <Marker position={marker.geocode}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </>
  );
};

export default Maps;
