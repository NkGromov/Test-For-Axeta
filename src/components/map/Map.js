import React, { useEffect } from "react";
import { useGoogleMaps } from "react-hook-google-maps";

const Map = ({ lat, lng }) => {
    const { ref, map, google } = useGoogleMaps("AIzaSyDhZHCb7vFwVvXAjiBGvFPMBFZzCrSCMfc", {
        center: { lat: lat, lng: lng },
        zoom: 10,
        fullscreenControl: false,
        mapTypeControl: false,
        scaleControl: false,
        scrollwheel: false,
        navigationControl: false,
        streetViewControl: false,
    });
    useEffect(() => {
        if (map) map.panTo({ lat, lng });
    }, [lat, lng]);

    return <div ref={ref} className="map"></div>;
};

export default Map;
