import React from "react";
import Face from  './troll.png'
export default function Header () {
return(
    <div className="header">
   <img src={Face} alt="No Logo" ></img>
   <h1>Meme Generator</h1>
   </div>
    )
}
