import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import { Route, Routes,Redirect } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { GoogleMap, withGoogleMap, Marker } from "react-google-maps";
import { useGoogleMapLoader } from "google-maps-api-loader";
import React, { useEffect, useState } from "react"

import Map from './components/Map';
import { geocode } from 'react-geocode';
import axios from 'axios';
import NearestPlaces from './components/NearestPlaces';
import Chart from './components/Chart';
import newService from './services/newService'
import Form from './components/Form';
import News from './components/News';
import userService from './services/userService';
import Rate from './components/Rate';


function App() {
  const [markers, setMarkers] = useState([{ lat: 38.4192, lng: 27.1287 }]);
  const [nearestHospitals, setNearestHospitals] = useState([]);
  const [nearestSchools, setNearestSchools] = useState([]);
  const [nearestPharmacies, setNearestPharmacies] = useState([]);
  const [clickedLocation, setClickedLocation] = useState(null);
  const [userData, setUserData] = useState({
    username: '',
    pass: '', 
  });
  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const[disc,setDisc]=useState(null);
  const[user,setUser]=useState(null);

  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLoginButtonClick = () => {
    setShowLoginForm(true);
  };

  const handleLoginFormSubmit = (event) => {
    // Handle login form submission logic here
    event.preventDefault();
    // You may want to implement authentication logic or simply close the form
    setShowLoginForm(false);
    const fetchData = async () => {
      try {
        const response = await userService.fetchUserByStret(userData);
        if(response!=null){
          
          setUserData([...response.comments]);
        }
        
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchData();
  };
  
    
  
  
  const handleMapClick = event => {
    const newMarker = {
      id: markers.length + 1,
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    newService.fetchNewsByStreet("bergama");

    setMarkers([newMarker]);
    
      console.log(clickedLocation)
      fetchAddress(markers[0])
    // En yakın yerleri bul ve listele
    findNearestPlaces(newMarker, "hospital", setNearestHospitals);
    findNearestPlaces(newMarker, "school", setNearestSchools);
    findNearestPlaces(newMarker, "pharmacy", setNearestPharmacies);
  };

  const handleMarkerClick = marker => {
    // Marker tıklandığında yapılacak işlemler (örneğin, en yakın yerleri listeleyin)
    findNearestPlaces(marker, "hospital", setNearestHospitals);
    findNearestPlaces(marker, "school", setNearestSchools);
    findNearestPlaces(marker, "pharmacy", setNearestPharmacies);
  };
 
  useEffect(()=>{
    if(clickedLocation!=null){
      const addressParts = clickedLocation.address.split(',');     
      const firstPart = addressParts.length > 0 ? addressParts[0].trim() : '';     
      setDisc(firstPart);
    }

  },[clickedLocation])


  
  const fetchAddress =(newMarker) => {    
        const response =   axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${newMarker.lat},${newMarker.lng}&key=AIzaSyB_fLMW-FubvPfdB8rQ3Ikdg9VgMe1e0GM`
        ) 
        response.then(r=>{
          console.log("sfsd")
          const addressInfo = {
            address: r.data.results[0].formatted_address,
            district: r.data.results[0].address_components.find(
              component => component.types.includes("administrative_area_level_2")
            )?.long_name,
          };
          setClickedLocation(addressInfo)
          return addressInfo;
        })
        .catch(e=>{
          throw e;
        })
  };
 const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const earthRadius = 6371; // Dünya'nın yarıçapı (km)
    const degreesToRadians = (degrees) => (degrees * Math.PI) / 180;
  
    const deltaLat = degreesToRadians(lat2 - lat1);
    const deltaLng = degreesToRadians(lng2 - lng1);
  
    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(degreesToRadians(lat1)) * Math.cos(degreesToRadians(lat2)) * Math.sin(deltaLng / 2) * Math.sin(deltaLng / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    const distance = earthRadius * c; // Mesafe (km)
    return distance.toFixed(2); // İki ondalık basamaklı olarak mesafeyi sakla
  };
  
  const findNearestPlaces = (marker, placeType, setNearestPlaces) => {
    // Google Places API kullanarak en yakın yerleri bul
    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    service.nearbySearch(
      {
        location: { lat: marker.lat, lng: marker.lng },
        radius: 500, // 5 kilometre içinde ara
        types: [placeType], // Belirtilen yer türündeki yerleri ara
      },
      (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
          // Her bir yerin marker'a olan uzaklığını hesapla
          const placesWithDistance = results.map(place => {
            const distance = calculateDistance(marker.lat, marker.lng, place.geometry.location.lat(), place.geometry.location.lng());
            const businessStatus = place.business_status || "OPERATIONAL";
            return {
              ...place,
              distance: distance,
            };
          });
  
          // Uzaklık bilgisi ile birlikte en yakın yerleri set et
          setNearestPlaces(placesWithDistance);
        }
      }
    );
  };

  return (
    <>
    <div className="login-button-container">
        <button className="login-button" onClick={handleLoginButtonClick}>
          Login
        </button>
      </div>

      {showLoginForm && (
        <div className="login-form-container">
          <form className="login-form" onSubmit={handleLoginFormSubmit}>
            <label>
              Username:
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Password:
              <input type="password" name="password" />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
     
    <div>
      <h1>React Google Haritalar</h1>
      <Map
        containerElement={<div style={{ height: "500px", width: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
        markers={markers}
        onMapClick={handleMapClick}
        onMarkerClick={handleMarkerClick}
      />
      {clickedLocation && (
        <div>
          <h2>Tıklanan Konum Bilgileri:</h2>
          <p>Adres: {clickedLocation.address}</p>
          <p>İlçe: {clickedLocation.district}</p>
        </div>
      )}

      
          </div>  
              <div className='bottom'>
                      <div className='nearestPlaces'>
                        <NearestPlaces nearestPlaces={
                            {nearestHospital:nearestHospitals,
                            nearestSchool:nearestSchools,
                            nearestPharmacie:nearestPharmacies}}/>
                      </div>
                      <div className='news'>
                         
                         <News disctrict={"bergama"}/>
                      </div>
              </div>
              <div className='bottom'>
                    <div className='comments'>
                    <Form user={userData} disctrictName={disc}/>
                    </div>
                    <div className='rentrate'>
                          <Rate street={disc} neigh={clickedLocation}/>
                    </div>
              </div>   
          <div>
    </div>
   
    </>
    
  );
};

export default App;
