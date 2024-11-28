import React, {useRef, useEffect} from 'react'
import KitchenApi from './KitchenApi'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

const Kitchen = () => {
  const slider=useRef()
  const left=useRef()
  const right=useRef()

  const leftScroll=()=>{
    //slider.current.scrollLeft-=100
    if (slider.current) {
      slider.current.scrollTo({
        left: slider.current.scrollLeft - 500,
        behavior: 'smooth', // Enable smooth scrolling
      });
      left.current.style.outline="2px solid black"
    }
  }

  const rightScroll=()=>{
    //slider.current.scrollLeft+=100
    if (slider.current) {
      slider.current.scrollTo({
        left: slider.current.scrollLeft + 500,
        behavior: 'smooth', // Enable smooth scrolling
      });
      right.current.style.outline="2px solid black"
    }
  }

  useEffect(()=>{
    document.addEventListener("click", (e)=>{
      if(left.current && !left.current.contains(e.target))
      {
        left.current.style.outline="none"
      }
      if(right.current && !right.current.contains(e.target))
      {
        right.current.style.outline="none"
      }
    })
  }, [])

  return (
    <div className='d-flex justify-content-center' style={{width:"100%", minWidth:"1350px"}}>
      <div className='mt-4 mb-4 mx-4 py-4 bg-white' style={{width:"97%", margin:"auto", overflow:"hidden", position:"relative"}}>
        <button className='d-flex kitchenbtn justify-content-center align-items-center bg-secondary-emphasis px-2 py-3' style={{border:"none", height:"100px", boxSizing:"border-box", position:"absolute", borderTopRightRadius:"3px", borderBottomRightRadius:"3px", top:"calc(50% - 50px)"}} ref={left} onClick={leftScroll}><FaChevronLeft /></button>

        <div className='fs-5 fw-bold mb-3 px-4'>Best Sellers in Home & Kitchen</div>

        <div className='d-flex justify-content-center'>

          <div className='d-flex px-4 justify-content-center bg-white' ref={slider} style={{minWidth:"1350px", boxSizing:"border-box", width:"91.5%", overflowX:"hidden", gap:"20px"}}>
          {
            KitchenApi.map((k, index)=>{
                return (
                    <div className="float-start" key={index}>
                        <img src={k} width="150px" height="200px"></img>
                    </div>
                )
            })
          }
          </div>
        </div>

        <button className='d-flex kitchenbtn justify-content-center align-items-center bg-secondary-emphasis px-2 py-3' style={{border:"none", right:"0", height:"100px", boxSizing:"border-box", position:"absolute", borderTopLeftRadius:"3px", borderBottomLeftRadius:"3px", top:"calc(50% - 50px)"}} ref={right} onClick={rightScroll}><FaChevronRight /></button>
      </div>
    </div>
  )
}

export default Kitchen