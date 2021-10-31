import { useContext } from "react"
import { LangContext } from "../App";


function Japanese(){
    const getContext = useContext(LangContext)

    return (
        <>
        <input value="Japanese" className="btnPading" type="button" onClick={()=>{getContext.SetLangInfo(["こんにちは世界","https://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/027/291/original/horyuji-nara-s1453272626.jpg?2020&d=750x400"])}}/>
        
        </>
    )
}

export default Japanese