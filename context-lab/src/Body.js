import { useContext } from "react";
import { UserContext } from "./App";

function Body() {

    const lang = useContext(UserContext)

    return (
        <div>
            <img src={lang.image}></img>
        </div>
    )
    
}

export default Body;
