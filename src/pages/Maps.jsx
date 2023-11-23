import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from "react-leaflet-cluster";

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
      <div className="flex flex-col h-[70vh] md:flex-row">
        <div className="w-full h-1/2 bg-primary md:w-1/2 md:h-full">
          <header className="p-2 mb-4 text-2xl font-main text-secondary">
            Explore Our Branches
          </header>
          <p className="p-2 text-lg font-paragraph">
            We have branches in all major malls across Eldoret
          </p>
          <ul className="p-2 font-paragraph">
            <li>
              Chutney Bites, <span className="font-main">Rupa Mall</span>
            </li>
            <li>
              Chutney Bites, <span className="font-main">Zion mall</span>
            </li>
            <li>
              Chutney Bites, <span className="font-main">Highlands mall</span>
            </li>
          </ul>
        </div>
        <MapContainer
          center={[0.5176, 35.2781]}
          zoom={14}
          className="w-full h-1/2 md:w-1/2 md:h-full"
        >
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
      </div>
    </>
  );
};

export default Maps;
