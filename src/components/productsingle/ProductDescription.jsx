import React from 'react'

export default function ProductDescription(props) {
  return (
    <>
    <div className='border-light'>
        {props.description.map((item,index)=>(
            <div key={index}>
            <p style={{color:'gray'}}>{item}</p>
            <br/>
            </div>
        ))}
    </div>
    </>
  )
}
