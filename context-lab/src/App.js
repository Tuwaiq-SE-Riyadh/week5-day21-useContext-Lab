
import './App.css';
import { createContext, useState } from "react";
import Header from './Header';
import Body from './Body';

export const UserContext = createContext({text:"", image:""});

function App() {

  const [content, setContent] = useState({text:"", image:""});

  let list = {
    obj1: {
      lang: "Hello World!",
      img: "http://pavbca.com/walldb/original/b/1/1/112053.jpg"
    },
    obj2: {
      lang: "السلام عليكم ورحمة الله وبركاته",
      img: "https://www.vizts.com/wp-content/uploads/2015/12/Riyadh-skyline-at-night.jpg"
    },
    obj3: {
      lang: "こんにちは世界",
      img: "https://www.globalbeeholidays.com/wp-content/uploads/2018/02/Osaka-Castle-Japan.jpg"
    }
  }

  const displayEnglish = () => {
    let lang = list.obj1.lang
    let img = list.obj1.img
    setContent({text:lang, image:img});
  };

  const displayArabic = () => {
    let lang = list.obj2.lang
    let img = list.obj2.img
    setContent({text:lang, image:img});
  };

  const displayJapanese = () => {
    let lang = list.obj3.lang
    let img = list.obj3.img
    setContent({text:lang, image:img});
  };

  return (
    <UserContext.Provider value={content}>
      <div>
         <button onClick={displayEnglish}>English</button>
         <button onClick={displayArabic}>Arabic</button>
         <button onClick={displayJapanese}>Japanese</button>
         <Header/>
         <Body/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
