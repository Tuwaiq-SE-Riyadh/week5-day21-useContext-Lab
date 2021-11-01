 import React, { useContext } from "react"
 import {UserContext}from "../App"
 
 function Body (){
    const user= useContext(UserContext)

    return(
    <div>
    
    <img src={user.img}></img>
    
        
    </div>
    
    )
    
    }
    export default Body