import Arabic from "./Arabic"
import { useContext } from "react";
import { LangContext } from "../App";


function English (){
    const getContext = useContext(LangContext)
    return(
    <>
    <input className="btnPading" value="English" type="button" onClick={() => {getContext.SetLangInfo(["Hello World","https://cdn.vox-cdn.com/thumbor/GF8Gg9zv_MLPWKA9RJtNM8J5HyU=/0x0:2000x1333/1200x900/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/56328225/190219_10_19_04_5DSR5554.12.jpg"])}}/>
    <Arabic/>
        
    </>
    )

}

export default English