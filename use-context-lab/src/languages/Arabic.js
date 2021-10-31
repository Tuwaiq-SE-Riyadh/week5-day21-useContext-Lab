import Japanese from "./Japanese"
import { useContext } from "react"
import { LangContext } from "../App";

function Arabic(){

    const getContext = useContext(LangContext)
    return (
        <>
          <input value="Arabic" className="btnPading" type="button"onClick={() => {getContext.SetLangInfo(["السلام عليكم ورحمة الله وبركاته","https://i.ytimg.com/vi/0q06o2IIp8s/maxresdefault.jpg"])}}/>
          <Japanese/>
        </>
    )
}

export default Arabic