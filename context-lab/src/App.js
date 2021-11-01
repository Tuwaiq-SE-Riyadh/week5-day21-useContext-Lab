
import './App.css';
import { createContext, useState } from "react";
import Header from './Header';

export const UserContext = createContext();

function App() {

  const [lang, setLang] = useState("");

  const displayEnglish = (lang) => {
    setLang(lang);
  };

  const displayArabic = (lang) => {
    setLang(lang);
  };

  const displayJapanese = (lang) => {
    setLang(lang);
  };

  return (
    <UserContext.Provider>
      <div className="button" value = {lang}>
        <Header/>
         <button onClick={displayEnglish("english")}>English</button>
         <button onClick={displayArabic("arabic")}>Arabic</button>
         <button onClick={displayJapanese("japanese")}>Japanese</button>
        
      </div>
    </UserContext.Provider>
  );
}

export default App;
