
import axios from 'axios';


const fetchRateByStreeet = async (street,neigh) => {
  try {
      console.log(street)
    const response = await axios.get(`http://localhost:8181/rates/${neigh}/${street}`);
   
    return response;
  } catch (error) {
    
  }
};

// Test durumu


// Hata durumu
const rateService=
{
    fetchRateByStreeet:fetchRateByStreeet
}

export default rateService;