// import the hook useContext to get the value of the context
import { useContext } from "react";
// import the UserContext
import { UserContext } from "../App";
function Header() {
    const userContext = useContext(UserContext) // => {user: "john", setUser: Function}
    return (
      <div className="App">
          <img src={userContext.img}></img>
      </div>
    );
  }
  
  export default Header;
  