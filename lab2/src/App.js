import './App.css';
import { createContext, useState } from "react";
import Header from "./Components/Header";
import Body from './Components/Body';
export const language = createContext();


function App() {

  const [lang, setLang] = useState('Arabic')

  const changelanguage = (e) => {
    const val = e.target.innerHTML;
    setLang(val);
  };




  return (
    <language.Provider value={lang}>

    <div id="d0">


    <button type="button"  onClick={changelanguage}>Arabic</button>
    <button type="button"  onClick={changelanguage}>English</button>
    <button type="button"  onClick={changelanguage}>Chinese</button>
    <br/><br/>

    <Header />
    <Body />


    </div>
    </language.Provider>
  );
}

export default App;
