// import the hook useContext to get the value of the context
import { useContext } from "react";
// import the UserContext
import { UserContext } from "../App";
function Body() {
    const userContext = useContext(UserContext) // => {user: "john", setUser: Function}
    return (
      <div className="App">
          <p>{userContext.txt}</p>
      </div>
    );
  }
  
  export default Body;
  