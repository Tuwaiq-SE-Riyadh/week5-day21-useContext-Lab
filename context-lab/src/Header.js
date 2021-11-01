//import { render } from "@testing-library/react";
import { useContext } from "react";
import { UserContext } from "./App";
import Body from "./Body";

function Header() {

    const lang = useContext(UserContext)

       if(lang == "english"){
        return <>
        <h3>Hello World!</h3>
        <Body/>
        </>

       } 

       if(lang == "arabic"){
        return <>
        <h3>السلام عليكم ورحمة الله وبركاته</h3>
        <Body/>
        </>
       } 

       if(lang == "japanese"){
        return <>
        <h3>こんにちは世界</h3>
        <Body/>
        </>
       } 
    }

export default Header;