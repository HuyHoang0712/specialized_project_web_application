"use client";
import React from "react";
import mapboxgl from "mapbox-gl";
import { useRef, useEffect, useState } from "react";
import { useGetRecentOrdersCoordinatesQuery } from "@/app/redux/features/order/orderApiSlice";
import "mapbox-gl/dist/mapbox-gl.css";

function Mapbox() {
  var utc = new Date().toJSON().slice(0, 10).replace("/", "-");
  const { data, error, isLoading } = useGetRecentOrdersCoordinatesQuery(utc);

  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;

  if (isLoading) {
    <div id="mapbox">Loading...</div>;
  }
  useEffect(() => {
    const mapbox = new mapboxgl.Map({
      container: "mapbox", // container ID
      style: "mapbox://styles/mapbox/streets-v12", // style URL
      center: [106.65794471075151, 10.772327943924136], // starting position [lng, lat]
      zoom: 10, // starting zoom
    });

    data &&
      data.map((item: any, idx: number) => {
        const marker = new mapboxgl.Marker().setLngLat(data[idx]).addTo(mapbox);
      });
  }, [data]);
  return <div id="mapbox" className="w-full h-full"></div>;
}

export default Mapbox;
