import "./App.css";
import { createContext, useState } from "react";
import sa from "./sa.jpg";
import eng from "./eng.jpg";
import jap from "./jap.jpg";
import Body from "./Components/Body";
import Header from "./Components/Header";

export const UserContext = createContext();

function App() {
  const [lang, setLang] = useState();
  const [img, setImg] = useState();
  // const English = React.createContext("Hello world");
  // const Arabic = React.createContext("مرحبا بالعالم");
  // const Japan = React.createContext("こんにちは世界");
  const Arabic = () => {
    setLang("مرحبا بالعالم");
    setImg(sa);
  };
  const English = () => {
    setLang("Hello world");
    setImg(eng);
  };
  const Japan = () => {
    setLang("こんにちは世界");
    setImg(jap);
  };
  return (
    <UserContext.Provider value={{ lang, img }}>
      <div className="App">
        <header className="App-header">
          <div className="list">
          <button onClick={Arabic}>Arabic</button>
          <button onClick={English}>English</button>
          <button onClick={Japan}>Japan</button>
          </div>
          
          <Header />
          <Body/>
        </header>
      </div>
    </UserContext.Provider>
  );
}

export default App;
