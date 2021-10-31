// import { useState, useEffect } from "react";
import Body from "./Body";

//1 
import { createContext, useState } from "react";


// 2
export const UserContext = createContext();



function Header() {


    const [value, setValue] = useState("");
    function changeValue1(e){
        let newval="English"
        setValue(newval)
    }
    function changeValue2(e){
        let newval="Arabic"
        setValue(newval)
    }
    function changeValue3(e){
        let newval="Japanese"
        setValue(newval)
    }
    console.log(value)
    return (

     <>
    <UserContext.Provider value={{value: value, setValue: setValue }}>
        <div className="output">
     <button onClick={changeValue1}>English</button>
      <button onClick={changeValue2}>Arabic</button>
      <button onClick={changeValue3}>Japanese</button>
    </div>
          <Body/>
          </UserContext.Provider>

     </>
    );
  }
  
  export default Header;