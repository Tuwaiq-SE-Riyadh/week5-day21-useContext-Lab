import { useContext } from "react";
import { UserContext } from "./App";

function Body() {

    const lang = useContext(UserContext)

    if(lang == "english"){
     return <img src="http://pavbca.com/walldb/original/b/1/1/112053.jpg"/>
    } 

    if(lang == "arabic"){
     return <img src="https://preview.redd.it/a42g7clq33q51.jpg?auto=webp&s=a7d926dd0d8664db3d53e68b218d752bdcb67a8d"/>
    } 

    if(lang == "japanese"){
     return <img src="https://www.globalbeeholidays.com/wp-content/uploads/2018/02/Osaka-Castle-Japan.jpg"/>
    } 

    
}

export default Body;

//http://pavbca.com/walldb/original/b/1/1/112053.jpg

//https://preview.redd.it/a42g7clq33q51.jpg?auto=webp&s=a7d926dd0d8664db3d53e68b218d752bdcb67a8d

//https://www.globalbeeholidays.com/wp-content/uploads/2018/02/Osaka-Castle-Japan.jpg