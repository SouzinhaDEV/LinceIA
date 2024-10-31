import React, { useState, useCallback, useMemo } from "react";
import {
  GoogleMap,
  Marker,
  LoadScript,
  StandaloneSearchBox,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import "../CSS/Oficina.css";

const MapPage = () => {
  const [map, setMap] = useState(null);
  const [searchBoxA, setSearchBoxA] = useState(null);
  const [searchBoxB, setSearchBoxB] = useState(null);
  const [pointA, setPointA] = useState(null);
  const [pointB, setPointB] = useState(null);

  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [response, setResponse] = useState(null);

  const position = {
    lat: -27.590824,
    lng: -48.551262,
  };

  const onMapLoad = useCallback((map) => {
    setMap(map);
  }, []);
  
  const onLoadA = useCallback((ref) => {
    setSearchBoxA(ref);
  }, []);
  
  const onLoadB = useCallback((ref) => {
    setSearchBoxB(ref);
  }, []);

  const onPlacesChangedA = useCallback(() => {
    if (searchBoxA) {
      const places = searchBoxA.getPlaces();
      if (places && places[0]) {
        const place = places[0];
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setPointA(location);
        setOrigin(null);
        setDestination(null);
        setResponse(null);

        // Centraliza o mapa na nova localização
        if (map) map.panTo(location);
      }
    }
  }, [searchBoxA, map]);

  const onPlacesChangedB = useCallback(() => {
    if (searchBoxB) {
      const places = searchBoxB.getPlaces();
      if (places && places[0]) {
        const place = places[0];
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setPointB(location);
        setOrigin(null);
        setDestination(null);
        setResponse(null);

        // Centraliza o mapa na nova localização
        if (map) map.panTo(location);
      }
    }
  }, [searchBoxB, map]);

  const traceRoute = useCallback(() => {
    if (pointA && pointB) {
      setOrigin(pointA);
      setDestination(pointB);
    }
  }, [pointA, pointB]);

  const directionsServiceOptions = useMemo(() => {
    return {
      origin,
      destination,
      travelMode: window.google ? window.google.maps.TravelMode.DRIVING : "DRIVING",
    };
  }, [origin, destination]);

  const directionsCallback = useCallback((res) => {
    if (res && res.status === "OK") {
      setResponse(res);
    } else {
      console.log(res);
    }
  }, []);

  const directionsRendererOptions = useMemo(() => {
    return {
      directions: response,
    };
  }, [response]);

  return (
    <div className="map">
      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY || ""}
        libraries={["places"]}
      >
        <GoogleMap
          onLoad={onMapLoad}
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={position}
          zoom={15}
        >
          <div className="address">
            <StandaloneSearchBox onLoad={onLoadA} onPlacesChanged={onPlacesChangedA}>
              <input className="addressField" placeholder="Digite o endereço inicial" />
            </StandaloneSearchBox>
            <StandaloneSearchBox onLoad={onLoadB} onPlacesChanged={onPlacesChangedB}>
              <input className="addressField" placeholder="Digite o endereço final" />
            </StandaloneSearchBox>
            <button onClick={traceRoute}>Traçar rota</button>
          </div>

          {!response && pointA && <Marker position={pointA} />}
          {!response && pointB && <Marker position={pointB} />}

          {origin && destination && window.google && (
            <DirectionsService
              options={directionsServiceOptions}
              callback={directionsCallback}
            />
          )}

          {response && directionsRendererOptions && (
            <DirectionsRenderer options={directionsRendererOptions} />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapPage;
