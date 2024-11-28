import React from 'react'
import Objects from './Object1Api'

const Objects1 = () => {
  return (
    <div className='d-flex justify-content-center outbox' style={{minWidth:"1350px", position:"relative", zIndex:"2", minHeight:"auto", backgroundColor:"#e8e8e8"}}>   {/*Outer box*/}
        <div className='d-grid box px-4 row gy-3' style={{gridTemplateColumns:"23% 23% 23% 23%", justifyContent:"space-between", width:"100%", minWidth:"1350px", margin:"0px 0px"}}>  {/*Box which have boxes of objects.*/}
        {
            Objects.map((o, index)=>{
                return (
                    <div key={index} className='bg-white px-3 mb-4' style={{backgroundColor:"blue", position:"relative"}}>          {/*Objects*/}
                        <div className='pb-3 pt-3'>
                            <div className='fs-5 fw-bold'>{o.title}</div>

                            <div>           {/*Box which have Images and name of object*/}
                                <div className='my-4 objs' style={{display:"grid", gridTemplateColumns:"48% 48%", justifyItems:"center", justifyContent:"space-between"}}>{
                                    o.obj.map((img, index)=>{
                                        return (
                                            <div className='pb-3' style={{width:img.imgWidth}} key={index}> {/*One object*/}
                                                <img src={img.img} width="146px" height="96px"></img>
                                                <div style={{fontSize:"9pt"}} className='fw-semibold'>{img.name}</div>
                                            </div>
                                        )
                                    })
                                }
                                </div>
                            </div>

                            <div className='pb-3' style={{color:"#0099ff", paddingTop:"20px", fontSize:"11pt", position:"absolute", bottom:"0"}}>{o.more}</div>
                        </div>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default Objects1