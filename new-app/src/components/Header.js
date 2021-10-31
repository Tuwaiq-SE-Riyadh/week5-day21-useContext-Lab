import Body from "./Body";
import { useContext } from "react";
import { UserContext } from "../App";

function Header() {

  const userContext = useContext(UserContext)
  return (
    <div>
       <h2>{userContext.user}</h2>
      <Body />
    </div>
  );
}

export default Header;
