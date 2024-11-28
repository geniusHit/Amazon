import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { FaCaretRight } from "react-icons/fa";
import Axios from 'axios'

const Signup = () => {
  const [name, setName]=useState(null)
  const [mobile, setMobile]=useState(null)
  const [password, setPassword]=useState(null)

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try{
      await Axios.post("http://localhost:8011/signup", {name, mobile, password})
      alert("Signup successful")
    }
    catch(error)
    {
      console.log("Couldn't signup ", error)
    }
  }

  return (
    <div className=''>
      <div className='mx-auto' style={{width:"23%"}}>
        <div className='text-center' style={{}}><span className='fs-2 fw-bold'>amazon</span>.in</div>

        <form onSubmit={handleSubmit} className='border rounded-3 border-secondary-emphasis p-3 mt-3' style={{width:"100%"}}>
            <span className='fs-4 fw-semibold'>Create Account</span>

            <div className='mt-3 fw-bold' style={{fontSize:"10pt"}}>Your Name</div>
            <input className='w-100 form-control mt-2' style={{fontSize:"10pt"}} type='text' placeholder='First and Last Name' onChange={(e)=>setName(e.target.value)}></input>
            <div id='nameError'></div>

            <div className='mt-3 fw-bold' style={{fontSize:"10pt"}}>Mobile Number</div>
            <select className='border border-secondary-emphasis rounded-2 mt-2' style={{outline:"none", display:"inline", height:"35px", width:"32%"}}>
                <option>IN +91</option>
            </select>
            <input type='text' className='form-control mt-2' style={{width:"65%", display:"inline", float:"right", fontSize:"10pt"}} onChange={(e)=>setMobile(e.target.value)}></input>
            <div id='nameError'></div>

            <div className='mt-3 fw-bold' style={{fontSize:"10pt"}}>Password</div>
            <input className='w-100 form-control mt-2' style={{fontSize:"10pt"}} type='text' placeholder="At least 6 characters" onChange={(e)=>setPassword(e.target.value)}></input>
            <div id='passError'></div>

            <div className='mt-4 fw-semibold' style={{fontSize:"10pt"}}>
                To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.
            </div>

            <input type='submit' className='bg-warning w-100 btn mt-4 shadow-sm' style={{fontSize:"10pt"}} value="Verify mobile number"></input>

            <hr className='border-bottom my-4'/>

            <div className='mt-3 fw-bold' style={{fontSize:"10pt"}}>Buying for work?</div>
            <div className='text-primary' style={{fontSize:"10pt"}}>Create a free business account</div>

            <hr
            className="my-4"
            style={{
                height: "2px",
                border: "none", // Remove default border
                background: "linear-gradient(to right, transparent 5%, gray, transparent 95%)"
                //the percentage of color is the stopping of color at the specific percentage of width.
            }}
            />

            <div className='my-4' style={{fontSize:"10pt"}}>
              Already have an account?
              <span><NavLink to="/signin" className="ms-1 text-decoration-none">Sign in <FaCaretRight /></NavLink></span>
            </div>

            <div className='mt-4' style={{fontSize:"10pt"}}>
              By creating an account or logging in, you agree to Amazon’s
              <NavLink>Conditions of Use</NavLink> and <NavLink>Privacy Policy</NavLink>
            </div>
        </form>
      </div>

      <hr
          className="my-4"
          style={{
              height: "2px",
              border: "none", // Remove default border
              background: "linear-gradient(to right, transparent 5%, gray, transparent 95%)"
              //the percentage of color is the stopping of color at the specific percentage of width.
          }}
        />

      <div className='py-4 d-flex flex-column justify-content-center align-items-center' style={{fontSize:"9pt"}}>
       <div className='d-flex justify-content-between' style={{width:"16%"}}>
          <NavLink className="text-decoration-none">Conditions of Use</NavLink>
          <NavLink className="text-decoration-none">Privacy Notice</NavLink>
          <NavLink className="text-decoration-none">Help</NavLink>
       </div>

       <div className='text-secondary mt-2'>© 1996-2024, Amazon.com, Inc. or its affiliates</div>
      </div>
    </div>
  )
}

export default Signup