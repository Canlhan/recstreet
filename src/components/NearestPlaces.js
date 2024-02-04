import React from 'react'
import './nearest.css'
const NearestPlaces = React.memo(({ nearestPlaces }) => {
    console.log("girdi");
  
    return (
      <>
        <div>
          <h2>En Yakın Hastane</h2>
          {nearestPlaces.nearestHospital.map((place, index) => (
            <div key={index} className="custom-card">
              <p>{place.name}</p>
              <p>Uzaklık: {place.distance} km</p>
            </div>
          ))}
        </div>
        <div>
          <h2>En Yakın Okul</h2>
          {nearestPlaces.nearestSchool.map((place, index) => (
            <div key={index} className="custom-card">
              <p>{place.name}</p>
              <p>Uzaklık: {place.distance} km</p>
            </div>
          ))}
        </div>
        <div>
          <h2>En Yakın Eczaneler</h2>
          {nearestPlaces.nearestPharmacie.map((place, index) => (
            <div key={index} className="custom-card">
              <p>{place.name}</p>
              <p>Uzaklık: {place.distance} km</p>
            </div>
          ))}
        </div>
      </>
    );
  });
  


export default NearestPlaces
