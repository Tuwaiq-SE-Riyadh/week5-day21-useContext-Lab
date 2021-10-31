import { useContext } from "react";
import { UserContext } from "../App";
function Body() {

    const userContext = useContext(UserContext)

    if (userContext.lang === "こんにちは世界") {
        userContext.setimg("https://www.arabnews.jp/en/wp-content/uploads/sites/2/2020/01/shutterstock_696687127-1024x684.jpg")
    }
    if (userContext.lang === "Hello world") {
        userContext.setimg("https://www.roadaffair.com/wp-content/uploads/2017/09/statue-of-liberty-nyc-shutterstock_57571180-1024x680.jpg")
    }
    if (userContext.lang === " السلام عليكم ورحمه الله وبركاته") {
        userContext.setimg("https://ichef.bbci.co.uk/news/976/cpsprodpb/2E9E/production/_118743911_gettyimages-1227850148.jpg")
    }

    

    return(
        <>
        {/* <img src={userContext.img} width="150px"/> */}
        <img src={userContext.img} width="350px"/>
        </>
    );
    
}

export default Body;