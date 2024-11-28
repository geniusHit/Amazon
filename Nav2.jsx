import React, {useRef} from 'react'
import { IoIosMenu } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

const Nav2 = () => {
  const sideMenu=useRef()
  const close=()=>{
    sideMenu.current.style.left="-400px"
    sideMenu.current.style.transition = "left 0.2s ease-out";
  }

  const open=()=>{
    sideMenu.current.style.left="0px"
    sideMenu.current.style.transition = "left 0.2s ease-out";
  }

  return (
    <div style={{minWidth:"1350px"}}>
      <nav className='text-white' style={{backgroundColor:"#001a33"}}>
        <div className='ms-3 py-1 d-flex align-items-center fw-semibold justify-content-start text-capitalize' style={{fontSize:"12pt"}}>
            <div className='d-flex align-items-center out px-2 py-1' onClick={open} style={{height:"30px"}}><IoIosMenu /><span>All</span></div>

            <div className='d-flex align-items-center out px-2 py-1' style={{height:"30px"}}><span>Fresh</span></div>

            <div className='d-flex align-items-center out px-2 py-1' style={{height:"30px"}}><span>MX Player</span></div>

            <div className='d-flex align-items-center out px-2 py-1' style={{height:"30px"}}><span>Sell</span></div>

            <div className='d-flex align-items-center out px-2 py-1' style={{height:"30px"}}><span>Best Sellers</span></div>

            <div className='d-flex align-items-center out px-2 py-1' style={{height:"30px"}}><span>Today's Deals</span></div>

            <div className='d-flex align-items-center out px-2 py-1' style={{height:"30px"}}><span>Mobiles</span></div>

            <div className='d-flex align-items-center out px-2 py-1' style={{height:"30px"}}><span>Electronics</span></div>

            <div className='d-flex align-items-center out px-2 py-1' style={{height:"30px"}}><span>Home & Kitchen</span></div>

            <div className='d-flex align-items-center out px-2 py-1' style={{height:"30px"}}><span>customer service</span></div>

            <div className='d-flex align-items-center out px-2 py-1' style={{height:"30px"}}><span>prime</span></div>

            <div className='d-flex align-items-center out px-2 py-1' style={{height:"30px"}}><span>amazon pay</span></div>
        </div>
      </nav>

      <div ref={sideMenu} className='d-flex justify-content-between' style={{width:"400px", minHeight:"100%", height:"100%", position:"fixed", zIndex:"4", transition:"none", left:"-400px"}}>
        <div className='' style={{width:"350px", minHeight:"100%", height:"100%", position:"fixed", zIndex:"4", top:"0", overflowY:"auto"}}>
          <div className='text-white px-5 py-3 d-flex align-items-center fs-5 fw-bold' style={{backgroundColor:"#001a33", height:"60px"}}><FaRegCircleUser className='me-3'/> Hello, Sign In</div>

          <div className='bg-white' style={{height:"calc(100% - 60px)"}}>
            <div className='px-5 py-4 border-bottom  text-capitalize bg-white'>
              <h5 className='fw-bold mb-4'>Trending</h5>
              <p className='fw-semibold'>Best sellers</p>
              <p className='fw-semibold'>New releases</p>
              <p className='fw-semibold'>Movers and Shakers</p>
            </div>

            <div className='px-5 py-4 border-bottom text-capitalize bg-white'>
              <h5 className='fw-bold mb-4'>amazon miniTV-FREE entertainment</h5>
              <p className='fw-semibold'>Echo & Alexa</p>
              <p className='fw-semibold'>Fire TV</p>
              <p className='fw-semibold'>Kindle e-readers & eBooks</p>
              <p className='fw-semibold'>audible audiobooks</p>
              <p className='fw-semibold'>amazon prime video</p>
              <p className='fw-semibold'>amazon prime music</p>
            </div>

            <div className='px-5 py-4 border-bottom text-capitalize bg-white'>
              <h5 className='fw-bold mb-4'>shop by category</h5>
              <p className='fw-semibold'>mobiles, computers</p>
              <p className='fw-semibold'>TV, appliances, Electronics</p>
              <p className='fw-semibold'>men's fashion</p>
              <p className='fw-semibold'>women's fashion</p>
              <p className='fw-semibold'>see all</p>
            </div>

            <div className='px-5 py-4 border-bottom text-capitalize bg-white'>
              <h5 className='fw-bold mb-4'>help & settings</h5>
              <p className='fw-semibold'>your account</p>
              <p className='fw-semibold'>customer service</p>
              <p className='fw-semibold'>sign in</p>
              <NavLink to="/signup" style={{textDecoration:"none", color:"black"}}><p className='fw-semibold'>sign up</p></NavLink>
            </div>
          </div>
        </div>

        <div onClick={close} style={{position:"absolute", right:0, width:"50px", top:-102}} className='px-3 py-3 text-black btn border-1 border d-flex justify-content-center align-items-center'>
          <RxCross1 className='fs-4 text-white fw-bold rounded-1'/>
        </div>
      </div>
    </div>
  )
}

export default Nav2