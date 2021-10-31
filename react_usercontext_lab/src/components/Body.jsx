import { useContext } from "react";
import { UserContext } from "../App";
function Body(){
    const userContext = useContext(UserContext)
    return(
        <>
        <img src={userContext.body}/>
        
        </>
    )
}
export default Body;
