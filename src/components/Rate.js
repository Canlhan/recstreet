import React, { useEffect, useState } from 'react'
import rateService from '../services/rateService'

const Rate = React.memo(({street,neigh}) => {

    console.log(street)
    console.log(neigh)
    const[rate,setRate]=useState();

    useEffect(()=>{
        console.log("sayfa yüklendiğinde değiştiğinde")
        const fetchData = async () => {
          try {
            const addressParts = neigh.address.split(',');     
            const firstPart = addressParts.length > 0 ? addressParts[0].trim() : ''; 
            const response = await rateService.fetchRateByStreeet(neigh.district,street);
            console.log(JSON.stringify(response));
           
            
              console.log('Response:', response.data);
              setRate(response.data);
           
            
           
            
          } catch (error) {
           
            
          }
        };
    
        fetchData();
        
      },[street])

  return (
    <div style={{ textAlign: 'center' }}>
    <p>{rate}</p>
    
  </div>
  )
});

export default Rate