import React, { useEffect } from 'react'
import indFlag from '../assets/Pictures/Flag_of_India.svg.png'
import { IoLocationOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{minWidth:"1350px", position:"sticky", top:"0px", zIndex:"3"}}>
      <nav style={{boxSizing:"border-box", backgroundColor:"#000d1a"}} className='d-flex justify-content-evenly py-2'>
        <div className='text-white d-flex align-items-center text-danger-hover out'>
          <NavLink to="/" style={{textDecoration:"none"}}><span className='fs-4 fw-bold' style={{textDecoration:"none", color:"white"}}>amazon</span> <span className='mt-1' style={{textDecoration:"none", color:"white"}}>.in</span></NavLink>
        </div>

        <div className='out'>
          <div className='text-secondary ms-3'>Delivering to Chandigarh 140603</div>
          <div>
            <IoLocationOutline className='text-white'/> <span className='text-white'>Update Location</span>
          </div>
        </div>

        <div className='d-flex align-items-center'>
          <select className='rounded-start-2 px-1 py-2 bg-light text-secondary text-capitalize' style={{height:"40px", width:"50px"}}>
            <option>All</option>
            <option>Alexa Skills</option>
            <option>Amazon Devices</option>
            <option>amazon fashion</option>
            <option>amazon fresh</option>
            <option value="">amazon pharmacy</option>
            <option value="">appliances</option>
            <option value="">apps & games</option>
            <option value="">audible audiobooks</option>
            <option value="">baby</option>
            <option value="">beauty</option>
            <option value="">books</option>
            <option value="">car & motorbike</option>
            <option value="">clothing & accessories</option>
            <option value="">collectibles</option>
            <option value="">computer & accessories</option>
            <option value="">deals</option>
            <option value="">Electronics</option>
            <option value="">furniture</option>
            <option value="">garden & outdoors</option>
            <option value="">gift cards</option>
            <option value="">grocery & gourmet foods</option>
          </select>
          <input type='text' className='py-2 navSearch' style={{height:"40px", width:"40vw"}} placeholder='Search Amazon.in'></input>
          <button className='px-3 rounded-end-2 d-flex justify-content-center align-items-center' style={{backgroundColor:"#fcce51", height:"40px", border:"none"}}><IoSearch className='fs-4'/></button>
        </div>

        <div className='d-flex align-items-center out'>
          <img src={indFlag} style={{width:"24px", height:"17px"}}></img>
          <select className='text-uppercase text-white'  style={{backgroundColor:"transparent", border:"none"}}>
            <option value="">en</option>
          </select>
        </div>

        <div className='text-white out'>
          <div style={{fontSize:"10pt"}}>Hello, sign in</div>
          <div style={{fontSize:"11pt"}} className='fw-bold'>Account & Lists ▼</div>
        </div>

        <div className='text-white out'>
          <div style={{fontSize:"10pt"}}>Returns</div>
          <div style={{fontSize:"11pt"}} className='fw-bold'>& Orders</div>
        </div>

        <div className='out text-white fs-1 d-flex align-items-center'>
          <CiShoppingCart />
          <span className='' style={{fontSize:"13pt"}}>Cart</span>
        </div>
      </nav>
    </div>
  )
}

export default Navbar