import React from 'react';
import { GoogleMap, Marker, DirectionsRenderer } from '@react-google-maps/api';

const GoogleMapComponent = ({ center, directionsResponse }) => {
  return (
    <GoogleMap
      center={center}
      zoom={15}
      mapContainerStyle={{ width: '100%', height: '100%' }}
      options={{
        zoomControl: false,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
      }}
    >
      <Marker position={center} />
      {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
    </GoogleMap>
  );
};

export default GoogleMapComponent;
