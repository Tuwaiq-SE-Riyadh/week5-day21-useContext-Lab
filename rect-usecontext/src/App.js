import './App.css';
import Header from './component/Header';
import { createContext, useState } from "react";
import Body from './component/Body';

// export the context
export const UserContext = createContext();

function App() {
  const [lang, setlang] = useState();
  const [img , setimg] = useState()

  return (
    <div className="App">
    <UserContext.Provider value={{ lang: lang, setlang: setlang  , img , setimg}}>
        <Header/>
        <Body/>
    </UserContext.Provider>
    </div>
  );
}

export default App;
