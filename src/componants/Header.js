import { useContext } from "react";
import { language } from "../App";


function Header(){
    const lang = useContext(language);
    return(
        <h1>{lang}</h1>
    )
}

export default Header;