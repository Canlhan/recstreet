
import axios from 'axios';


const fetchCommentsByStret = async (street) => {
  try {
    const response = await axios.get(`http://localhost:8181/discs/disc/${street}`);
   
   
    return response.data
  } catch (error) {
    
  }
};

const adddisc =async (disctrict) =>{
  try {
    
    const response = await axios.post(`http://localhost:8181/discs/`,{districtName:disctrict.disctrictName});
   
    
    return response.data
  } catch (error) {
    
  }
};

const addComment =async (comment,disId) =>{
  try {
   console.log()
    const response = await axios.post(`http://localhost:8181/discs/add/${disId}`,{comment:comment});
   
    return response.data
  } catch (error) {
    
  }
};

// Test durumu


// Hata durumu
const commentService=
{
    fetchCommentsByStret:fetchCommentsByStret,
    adddisc:adddisc,
    addComment:addComment
}

export default commentService;