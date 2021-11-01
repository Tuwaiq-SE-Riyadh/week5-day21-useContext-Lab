import "./App.css";
// import createContext
import { createContext, useState } from "react";
import Header from "./components.js/Header";
import Body from "./components.js/Body";

// export the context
export const UserContext = createContext({text:"",img:""});


function App() {
  const [content, setContent] = useState({text:"",img:""});
  // const [them, setThem] = useState([]);
  let list = {
    info1: {
     lang:"Hello world",
      pic:"https://cutt.ly/IRV9EwW"
    },
    info2: {  lang : " السلام عليكم ورحمة الله وبركاته",
     pic : "https://cutt.ly/TRV29x6" },

      info3: { lang : "ハローワールド",
    pic : "https://cutt.ly/hRV9eg3"
}

}


const showpicenglish = () => {
  let lang = list.info1.lang
  let pic = list.info1.pic
  setContent({text:lang,img:pic})
}
const showpicarabic = () => {
  let lang=list.info2.lang
  let pic = list.info2.pic
  setContent({text:lang,img:pic})
}
  const showpicjapan = () => {
    let lang=list.info3.lang
    let pic = list.info3.pic
    setContent({text:lang,img:pic})
  }



return (
  // wrap the provider around the desired children and provide the value
  <UserContext.Provider value={content} >
    
    <div>
   

    <button onClick={showpicenglish}>English</button>
    <button onClick={showpicarabic}>Arabic</button>
    <button onClick={showpicjapan}>japan</button>
    <Header />
    <Body  />
    </div>
   
  </UserContext.Provider>
)
  
}

export default App;
