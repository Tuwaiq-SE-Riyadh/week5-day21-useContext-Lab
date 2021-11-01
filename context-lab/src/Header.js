import { useContext } from "react";
import { UserContext } from "./App";

function Header() {

    const lang = useContext(UserContext)

        return (

            <div>
                <p>{lang.text}</p>
            </div>
        )
       } 
    

export default Header;