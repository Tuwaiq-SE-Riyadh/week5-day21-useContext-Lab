import { createContext, useState } from "react";
import Header from "./componants/Header";
import Body from "./componants/Body";
export const language = createContext();

function App() {
  const [lan, setLan] = useState("arabic");
 
  function arabic(){
    setLan("arabic")
    console.log(lan);
    
  }
  function english(){
    setLan("english")
    console.log(lan);
  }
  function japanese(){
    setLan("japanese")
    console.log(lan);
  }
  return(
    <language.Provider value={lan}>
      <div>
        <button onClick={arabic}>Arabic</button>
        <button onClick={english}>English</button>
        <button onClick={japanese}>Japanese</button>
        <Header/>
        <Body/>
      </div>
    </language.Provider>
  )
 
}

export default App;

