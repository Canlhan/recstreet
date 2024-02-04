
import axios from 'axios';


const fetchUserByStret = async (user) => {
  try {
    const response = await axios.post(`http://localhost:8181/users/`,{
        username:user.username,
        pass:user.pass
    });
   
    console.log('Data:', response);
    return response.data
  } catch (error) {
    
  }
};

// Test durumu


// Hata durumu
const userService=
{
    fetchUserByStret:fetchUserByStret
}

export default userService;