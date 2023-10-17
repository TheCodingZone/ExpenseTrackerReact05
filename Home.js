import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Pages/Home.css'
import AuthContext from './auth-context'
const Home = () => {
  const[message,setMessage]=useState(false);
 
    const authCtx=useContext(AuthContext);
    console.log(authCtx.isLoggedIn);
    const verifyEmailHandler=(event)=>{
      event.preventDefault();
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCXWPLAZ6pK9fLCJJ2u-IE4RT2Ymk71Z68',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({"requestType":"VERIFY_EMAIL","idToken":authCtx.token})
      }).then((response)=>{
        if(response.ok){
          setMessage('Check your email , you might have recieved a verification link . Click on it to verify.');
         
          console.log(response);

        }
      }).catch((error)=>{
        console.log(error);
      })
    }
    setTimeout(() => {
      setMessage(null)
    }, 4000);
  return (
    <div className='home'>
        <h4 className='heading'>Welcome To Expense Tracker!!!</h4>
        {authCtx.isLoggedIn && 
        <div>Your Profile is incomplete<Link to='/CompleteProfile'>Complete now</Link></div>

      }
      {authCtx.isLoggedIn &&<div>Your Email is not verified.
      
      <button type="button" class="btn btn-link"  onClick={verifyEmailHandler}
      style={{color:'red',fontWeight:'bold',fontStyle:'italic'}}>Verify Email</button>

  </div>}
  <div style={{color:'red',fontWeight:'bold',fontStyle:'italic'}}>{message}</div>
 </div>
  )
}

export default Home
