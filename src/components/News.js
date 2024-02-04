import React, { useEffect, useState } from 'react'
import newService from '../services/newService'

const News = React.memo(({disctrict}) => {
  

  const[news,setNews]=useState([])
   
   
/*
  useEffect(()=>{
    const fetchData = async () => {
      try {
       const response = await newService.fetchNewsByStreet(disctrict);
        console.log("Response:"+ JSON.stringify(response));
        if(response!=null){
          
          //setNews([...response.comments]);
        }
        
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    

    fetchData();
  },[disctrict])
  */

  return (
    <div>
      <h1>News List</h1>
      <ul>
        {news.map((item, index) => (
          <li key={index}>{item.title}</li>
          // Yukarıda, her bir haberin başlığını alıp liste halinde gösteriyoruz.
          // Eğer haber nesnenizde başka özellikler de varsa, onları uygun şekilde kullanabilirsiniz.
        ))}
      </ul>
    </div>
  );
       
});

export default News