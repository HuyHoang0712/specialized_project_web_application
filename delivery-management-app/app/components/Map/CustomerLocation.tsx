"use client";
import React from "react";
import mapboxgl from "mapbox-gl";
import { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { useGetCustomerByIdQuery } from "@/app/redux/features/customer/customerApiSlice";

interface Props {
  id: string;
}
function CustomerLocation(props: Props) {
  const { id } = props;
  const { data, error, isLoading } = useGetCustomerByIdQuery(id);
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

  if (isLoading) {
    <div id="mapbox">Loading...</div>;
  } else {
    const longitude = data.longitude;
    const latitude = data.latitude;

    const mapbox = new mapboxgl.Map({
      container: "mapbox", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [longitude, latitude], // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    const marker = new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(mapbox);
  }

  return <div id="mapbox" className="w-full h-full"></div>;
}

export default CustomerLocation;
