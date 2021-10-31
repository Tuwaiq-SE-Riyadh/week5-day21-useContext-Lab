import { createContext, useState } from "react";
import Header from "./compont./Header ";
import Bodyx from "./compont./Bodyx";
export const UserContext = createContext();

// import './App.css';

function App() {
  const [lang,setlang]=useState("frins")
  const updateUser = (lang) => {
    setlang(lang )
  
    // setUser(userValue);
  };
  return (
    <UserContext.Provider value={lang}>
    <div >
      
      <button onClick={()=>updateUser("english")}>English</button>
      <button onClick={()=>updateUser("Arab")}>Arabic</button>
      <button onClick={()=>updateUser("frins")}>French</button>
      <Header />
      <Bodyx/>
    </div>
  </UserContext.Provider>

  );
}

export default App;
