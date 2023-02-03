import React from "react";

export default function ProductAdditionalInfo(props) {
  return (
    <>
      <div className="border-light">
        <ul>
          {props.additionalInformation.map((item, index) => (
            <li style={{color:"gray",fontSize:"15px",lineHeight:"30px"}} key={index}>
              <span style={{color:"black",fontWeight:"500",minWidth:"125px",paddingRight:"20px",display:"inline-block"}}>{`${item.title} :`}</span>
              {item.value}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
