import "./App.css";
import { createContext, useState } from "react";
import Header from "./components/Header";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState("");
  const [userValue, setUserValue] = useState("");



  const updatArabic= () => {
    setUser("اهلا وسهلا");
    setUserValue("https://cdn.al-ain.com/lg/archive/news-image/pyramids-of-giza_408476.jpg")
  };

  const updatEnglish = () => {
    setUser("Welcome");
    setUserValue("https://cdnnarabic1.img.sputniknews.com/img/102212/49/1022124923_0:0:1000:541_1000x541_80_0_0_b093cdab6204caa057308f34530512bd.jpg")
  };

  const updatJapanese = () => {
    setUser("ようこそ");
    setUserValue("https://www.albayan.ae/polopoly_fs/1.2853552.1486679786!/image/image.jpg")
  };

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser , userValue: userValue, setUserValue: setUserValue}}>
      <div>
        
        <button onClick={updatArabic}>Arabic</button>
        <button onClick={updatEnglish}>English</button>
        <button onClick={updatJapanese}>日本</button>
        <Header />
      </div>
    </UserContext.Provider>
  );
}

export default App;
