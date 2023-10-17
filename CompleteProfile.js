import React, { useContext, useEffect } from 'react'
import './CompleteProfile.css'
import { useRef } from 'react'
import {auth} from '../Firebase/FirebaseConfig'
import AuthContext from './auth-context'
const CompleteProfile = () => {
  const usernameInputRef=useRef();
  const imageurlInputRef=useRef();
  const authCtx=useContext(AuthContext);
  useEffect(()=>{
   fetch('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyCXWPLAZ6pK9fLCJJ2u-IE4RT2Ymk71Z68',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({auth ,idToken:authCtx.token})
   }).then((response)=>{
    console.log(response);
   }).catch((error)=>{
    console.log("Error"+" "+error.message);
   })
  });
  const submitHandler=(event)=>{
     event.preventDefault();
     const enteredUsername=usernameInputRef.current.value;
     const enteredImageUrl=imageurlInputRef.current.value;
     console.log(enteredImageUrl+" "+enteredUsername);
     fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCXWPLAZ6pK9fLCJJ2u-IE4RT2Ymk71Z68',{
      method:'POST',
      headers:{

        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        'idToken': authCtx.token,
        'displayName': enteredUsername,
        'photoUrl': enteredImageUrl,
        
    'returnSecureToken': true,
      })

     }).then((response)=>{
      console.log(response)
     }).catch((error)=>{
      console.log("Error"+" "+error);
     })
  }
  return (
    <div>

    <div className='completeProfile'>
        
      <div className='quote'>Winners never quit,Quitters never win.</div>
      <div className='profile'>Your profile is <b style={{color:'red'}}>64%</b> completed.A complete Profile has higher chances of landing a job.Complete Now</div>
      <hr style={{color:'black',fontWeight:'bold'}}/>

      
    </div>
    <div className='form'>
        <h4>Contact Details</h4>
    <form className='formComponant'>
        <label htmlFor="name" style={{marginRight:'5px'}}><i class="fa-solid fa-user" style={{marginRight:'5px'}}></i>Username:-</label>
        <input type="text"  style={{marginRight:'5px'}} ref={usernameInputRef}/>
        <label htmlFor="profileurl" style={{marginRight:'5px'}}><i class="fa-solid fa-id-badge" style={{marginRight:'5px'}}></i>Profile Photo Url:-</label>
        <input type="text" style={{marginRight:'5px'}} ref={imageurlInputRef}/><br/>
        <button className='btn btn-danger'style={{marginRight:'5px'}} onClick={submitHandler}>SUBMIT DETAILS</button>

      </form>
    <hr />
    </div>
    </div>
  )
}

export default CompleteProfile
