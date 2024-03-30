"use client";
import React from "react";
import mapboxgl from "mapbox-gl";
import Map, { Marker } from "react-map-gl";
interface Props {
  center: [number, number];
}

function Mapbox(props: Props) {
  const { center } = props;
  return (
    <Map
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
      initialViewState={{
        latitude: center[0],
        longitude: center[1],
        zoom: 15,
      }}
      style={{ width: "100%", overflow: "hidden" }}
    >
      <Marker latitude={center[0]} longitude={center[1]} />
    </Map>
  );
}

export default Mapbox;
