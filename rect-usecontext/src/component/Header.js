import { useContext } from "react";
import { UserContext } from "../App";

function Header() {
    const userContext = useContext(UserContext)

    const japa = (e) => {
        userContext.setlang("こんにちは世界")
      };
    const English = (e) => {
        userContext.setlang("Hello world")
    };
    const arabic = (e) => {
        userContext.setlang(" السلام عليكم ورحمه الله وبركاته")   
    };

    return(
        <div>
        <button onClick={japa} >Japanees</button>
        <button onClick={English} >English</button>
        <button onClick={arabic} >Arabic</button>

        <br/>

        <h1>{userContext.lang}</h1>
        </div>
    )
    
}

export default Header;