
import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

console.log("map")
const Map = withGoogleMap(props => (

    <GoogleMap
      defaultZoom={12} // İzmir ilini göstermek için uygun bir zoom seviyesi
      defaultCenter={{ lat: 38.4192, lng: 27.1287 }} // İzmir'in koordinatları
      onClick={props.onMapClick}
    >
      {props.markers.map(marker => (
        <Marker
          key={marker.id}
          position={{ lat: marker.lat, lng: marker.lng }}
          onClick={() => props.onMarkerClick(marker)}
        />
      ))}
    </GoogleMap>
  ));

  export default Map;