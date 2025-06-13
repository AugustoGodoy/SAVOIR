import React from "react";
import { Navbar } from "../components";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

// Como pegar a posição atual do usuário?
// Dica: use Geolocation API do navegador
const center = {
  lat: -23.55052,
  lng: -46.633308,
};

const markers = [
  { id: 1, position: { lat: -23.55052, lng: -46.633308 }, title: "Centro de SP" },
  { id: 2, position: { lat: -23.559616, lng: -46.731386 }, title: "Butantã" },
  { id: 3, position: { lat: -23.564224, lng: -46.652857 }, title: "Paulista" },
];

export const Map = () => {
  // Substitua pela sua chave da API do Google Maps
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "CHAVE_API",
  });

  return (
    <>
      <Navbar />
      <div style={{ width: "100%", height: "100%" }}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={12}
          >
            {markers.map(marker => (
              <Marker
                key={marker.id}
                position={marker.position}
                title={marker.title}
              />
            ))}
          </GoogleMap>
        ) : (
          <div>Carregando mapa...</div>
        )}
      </div>
    </>
  );
};