
import axios from 'axios';


const fetchNewsByStreeet = async (street) => {
  try {
    const response = await axios.get(`http://localhost:8181/news/${street}`);
   
    console.log('Data:', response);
  } catch (error) {
    
  }
};

// Test durumu


// Hata durumu
const newService=
{
    fetchNewsByStreet:fetchNewsByStreeet
}

export default newService;