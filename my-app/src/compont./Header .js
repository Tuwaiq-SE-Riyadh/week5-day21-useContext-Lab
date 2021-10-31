
import { useContext } from "react";
// import the UserContext
import { UserContext } from "../App";

function Header(){
    const userContext = useContext(UserContext) 
  console.log(userContext);


//   return(
//             <div>
//          Arab
//             </div>
//         )

if(userContext=="Arab"){
    return <div> Arabic </div>
    
  }else if(userContext=="english"){
    return <div> English </div>
  }else if(userContext=="frins"){
    return <div> French</div>
  }

    
}
export default Header;