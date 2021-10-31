import { UserContext } from "./Header ";
import { useContext } from "react";
import london from './london.jpg'
import riyadh from './riyadh.jpg'
import paris from './paris.jpg'
import './body.css'
function Body(){
    const userContext = useContext(UserContext)
    console.log(userContext.user); 
if(userContext.user=="Hello World")
return (
    <div>
<h1>{userContext.user}</h1>
<img src={london}  />
</div>
)
       
        if(userContext.user=="السلام عليكم ورحمة الله وبركاته")
return (
    <div>
<h1>{userContext.user}</h1>
<img className="riyadh"src={riyadh}  />
</div>
)

if(userContext.user=="Bonjour le monde")
return (
    <div>
<h1>{userContext.user}</h1>
<img src={paris}  />
</div>
)

return <p></p>
   
   
}
export default Body;