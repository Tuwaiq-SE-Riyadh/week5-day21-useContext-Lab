
import './App.css';
import { createContext, useState } from "react";
import Header from './components/Header';
import Body from './components/Body';
export const UserContext = createContext();

function App() {
  const [body, setBody] = useState();
  const [header,setHeader] = useState();

  const UpdateEnglish = () => {
    setHeader("hello World")
    setBody("https://static1.bigstockphoto.com/1/2/2/large1500/221272186.jpg")
    //console.log(header)
  };

  const UpdateArabic = () => {
    setHeader("السلام عليكم ورحمة الله وبركاته")
    setBody("https://mapio.net/images-p/70600897.jpg")
    //console.log(header)
  };

  const UpdateJapanese = () => {
    setHeader("やあ")
    setBody("https://media.fitspot.jp/wp-content/uploads/2020/04/nihonkaoku1.jpg")
    //console.log(header)
  };
  return (
    <UserContext.Provider value={{ body: body,header:header,}}>
    <div className="App">
      <button onClick={UpdateEnglish}>English</button>
      <button onClick={UpdateArabic}>Arabic</button>
      <button onClick={UpdateJapanese}>japanese</button>
      <Header/>
      <Body/>
    </div>
    </UserContext.Provider>
  );
}

export default App;
