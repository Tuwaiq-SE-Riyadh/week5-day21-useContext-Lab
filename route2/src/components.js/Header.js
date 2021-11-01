import React from "react";
import {UserContext}from "../App"
import {useContext}from "react"
function Header (){

const user= useContext(UserContext)
return(
    <div>
        <p>{user.text}</p>
    </div>
)
}
export default Header;