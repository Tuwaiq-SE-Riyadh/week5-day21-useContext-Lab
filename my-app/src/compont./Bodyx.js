import { useContext } from "react";
// import the UserContext
import { UserContext } from "../App";

function Bodyx(){
    const userContext = useContext(UserContext) 
  console.log(userContext);


//   return(
//             <div>
//          Arab
//             </div>
//         )

if(userContext=="Arab"){
    return <div><img src="https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg"/> </div>
    
  }else if(userContext=="english"){
    return <div> <img src=" https://www.stressless.com/-/media/images/ekornes-asa/our-story/about-ekornes/factories/ikornnes.jpg?h=133&iar=0&mw=750&w=250"/> </div>
  }else if(userContext=="frins"){
    return <div> <img src="https://homemakersfurniture.scene7.com/is/image/HomemakersFurniture/EkornesFjord"/> </div>
  }

    
}
export default Bodyx;