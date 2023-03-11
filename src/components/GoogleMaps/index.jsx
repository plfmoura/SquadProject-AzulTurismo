import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import mapMarker from '../../assets/animations/mapMarker.gif'

export default function GoogleMaps({lat, long, setclass}) {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB9jT6y0LZ7zX7gNvXnqihWnDbryoallZA"
    })

    const containerStyle = {
        width: '100%',
        height: '100%'
      };

    const position = {
        lat: lat,
        lng: long
      }

  return (
    <div className={setclass}>
        {isLoaded ? (
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={13}
            >
                <Marker position={position}></Marker>
            </GoogleMap>
        ) : <></>}
    </div>
    )
}
