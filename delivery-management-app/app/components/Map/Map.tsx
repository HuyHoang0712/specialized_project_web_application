"use client";
import React, { useRef, useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
function Map() {
  mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string;
  const mapContainerRef = useRef<any | null>(null);
  const mapRef = useRef<any | null>(null);
  const [position, setPosition] = useState({
    longtitude: 106.716651,
    latitude: 10.774413,
    zoom: 9,
  });
  useEffect(() => {
    if (mapRef.current) return;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: process.env.NEXT_PUBLIC_MAPBOX_STYLE,
      center: [position.longtitude, position.latitude],
      zoom: position.zoom,
    });
  }, []);
  return <div className="h-full w-[35vw]" ref={mapContainerRef}></div>;
}

export default Map;
