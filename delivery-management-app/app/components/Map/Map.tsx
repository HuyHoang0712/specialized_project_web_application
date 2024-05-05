"use client";
import React from "react";
import mapboxgl from "mapbox-gl";
import { useRef, useEffect, useState } from "react";
import Map, { Marker } from "react-map-gl";
import { useGetRecentOrdersCoordinatesQuery } from "@/app/redux/features/order/orderApiSlice";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapPinIcon } from "@heroicons/react/24/solid";
interface Props {
  center: [number, number];
}

// function Mapbox(props: Props) {
//   const { center } = props;
//   return (
//     <Map
//       mapStyle="mapbox://styles/mapbox/streets-v11"
//       mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
//       initialViewState={{
//         latitude: center[0],
//         longitude: center[1],
//         zoom: 15,
//       }}
//       style={{ width: "100%", overflow: "hidden" }}
//     >
//       <Marker latitude={center[0]} longitude={center[1]} />
//     </Map>
//   );
// }

function Mapbox() {
  var utc = new Date().toJSON().slice(0, 10).replace("/", "-");
  const { data, error, isLoading } = useGetRecentOrdersCoordinatesQuery(utc);

  mapboxgl.accessToken = "pk.eyJ1IjoidnV2aWV0aHVuZyIsImEiOiJjbHZwZmFscDAwMWxzMmtwcGU3bjJlams5In0.8OaCLZRJJdN79m8F68Lp-Q";
  const mapbox = new mapboxgl.Map({
    container: "mapbox", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [106.65794471075151, 10.772327943924136], // starting position [lng, lat]
    zoom: 10, // starting zoom
  });
  {
    isLoading ? (
      <div>Loading...</div>
    ) : (
      data.map((item: any, idx: number) => {
        const marker = new mapboxgl.Marker().setLngLat(data[idx]).addTo(mapbox);
      })
    );
  }
  return <div></div>;
}

export default Mapbox;
