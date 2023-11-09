import React from "react";
import logo from "./image-qr-code.png";
function Highlight() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "700px",
        background:'#c5d2ef'
      }}
    >
      <div style={{height:'350px',width:"220px",background:'white',paddingTop:'10px',borderRadius:'10px'}}>
        <img src={logo} alt="text" width='200px' height='200px' style={{borderRadius:'10px'}}></img>
        <div style={{fontWeight:'700',fontFamily:'sans-serif',marginTop:'10px',fontSize:'15px'}}>
            Improve your frontend <br></br> skills by building projects
        </div>
        <div style={{marginTop:'10px',opacity:'0.8',fontSize:'14px'}}>
            Scan the QR code to visit to frontend mentor and take your skills to next level
        </div>
      </div>

    </div>
  );
}

export default Highlight;
