import React, { useEffect, useState } from 'react'
import Message from './Message'
import './forms.css'
import commentService from '../services/disctService'
const Form = React.memo(({disctrictName,user}) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const[disc,setDisc]=useState({id:1});
  const[check,setCheck]=useState(false);
  const[addedComment,setAddComment]=useState(false);
  // marker değiştiğinde markerın bulunduğu mahalleyi alıp kaydediyor.
  useEffect(()=>{
    console.log("marker değiştiğinde")
    const addData = async (disctrict) => {
      try {
        console.log(disctrict)
        const response = await commentService.adddisc({disctrictName:disctrict});
        if(response.comments!=null){
          console.log("Response:", response.comments[0].comment);
          setMessages([...response.comments]);
        }
        setCheck(true);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    addData(disctrictName);
  },[disctrictName])

  // sayfa yüklendiğinde mahallenin mesajlarını getiriyor
  useEffect(()=>{
    console.log("sayfa yüklendiğinde değiştiğinde")
    const fetchData = async () => {
      try {
        const response = await commentService.fetchCommentsByStret(disctrictName);
        console.log(response);
        setDisc(response);
        if (response.comments.length !== 0) {
          console.log('Response:', response.comments[0].comment);
          setMessages([...response.comments]);
        }else{
          setMessages([])
        }
        
        console.log(response.id);
        setDisc(response);
      } catch (error) {
        console.error('Error fetching comments:', error);
        setMessages([])
      }
    };

    fetchData();
    setCheck(false);
  },[disctrictName])

  useEffect(()=>{
    console.log("sayfa yüklendiğinde değiştiğinde")
    const fetchData = async () => {
      try {
        const response = await commentService.fetchCommentsByStret(disctrictName);
        console.log(response);
        setDisc(response);
        if (response.comments.length !== 0) {
          console.log('Response:', response.comments[0].comment);
          setMessages([...response.comments]);
        }
        console.log(response.id);
        setDisc(response);
      } catch (error) {
        console.error('Error fetching comments:', error);
        setMessages([])
      }
    };

    fetchData();
    setCheck(false);
  },[addedComment])
  


  const handleSendMessage = async () => {
    
    if(user.username!=''){
    
      if (newMessage.trim() !== '') {
        try {
          const response = await commentService.addComment(newMessage, disc.id);
          setAddComment(true);
          console.log(response);
        } catch (error) {
          console.error('Error adding comment:', error);
        }
      }
      setNewMessage("")
    }else{
      alert("kayıt ol ya da giriş yap");
    }
    
  };
  useEffect(() => {
    if (addedComment) {
      setAddComment(false);
    }
  }, [addedComment]);

  return (
    <div>
      <div className='messages'>
        {messages.map((message, index) => (
          <Message key={index} text={message.comment} />
        ))}
      </div>
      <div className='inputs'>
        <input
          type='text'
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder='Type your message...'
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
});

export default Form