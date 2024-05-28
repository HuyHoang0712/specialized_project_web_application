"use client";
import React from "react";
import mapboxgl from "mapbox-gl";
import { useRef, useEffect, useState } from "react";
import { useGetOrderCoordinatesQuery } from "@/app/redux/features/order/orderApiSlice";
import "mapbox-gl/dist/mapbox-gl.css";

interface Props {
  id: string;
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

function OrderRoute(props: Props) {
  const { id } = props;

  const { data, error, isLoading } = useGetOrderCoordinatesQuery(id);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const mapbox = new mapboxgl.Map({
    container: "mapbox", // container ID
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [106.65794471075151, 10.772327943924136], // starting position [lng, lat]
    zoom: 10, // starting zoom
  });

  mapbox.setCenter(data[0]);
  data.map((item: any, idx: number) => {
    const marker = new mapboxgl.Marker().setLngLat(data[idx]).addTo(mapbox);
  });
  getRoute(data).then((res: any) => {
    mapbox.addLayer({
      id: "route",
      type: "line",
      source: {
        type: "geojson",
        data: res,
      },
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#3887be",
        "line-width": 5,
        "line-opacity": 0.75,
      },
    });
  });
  return <div></div>;
}

export default OrderRoute;

async function getRoute(coordinates: any) {
  // make a directions request using cycling profile
  // an arbitrary start will always be the same
  // only the end or destination will change
  const start_coordinates = coordinates[0];
  const end_coordinates = coordinates[1];
  const query = await fetch(
    `https://api.mapbox.com/directions/v5/mapbox/driving/${start_coordinates[0]},${start_coordinates[1]};${end_coordinates[0]},${end_coordinates[1]}?steps=true&geometries=geojson&access_token=${mapboxgl.accessToken}`,
    { method: "GET" }
  );
  const json = await query.json();
  const data = json.routes[0];
  const route = data.geometry.coordinates;
  const geojson = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: route,
    },
  };
  return geojson;
}
