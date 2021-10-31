import './App.css';
import { createContext, useState } from "react";
import Header from './components/Header';
import Body from './components/Body';


export const UserContext = createContext();

function App() {
    const [header,setHeader] = useState();
    const [body, setBody] = useState();

  const chengeEnglish = () => {
    setHeader("hello World")
    setBody("https://www.akhbarus.com/uploads/files/news/042017/new-year-eve.jpg")
  };

  const chengeArabic = () => {
    setHeader("السلام عليكم ورحمة الله وبركاته")
    setBody("https://clcdn.spa.gov.sa/image-resizer/h600/galupload/normal/202009/DST_1404412_2030944_202009051250058269.jpg")
  };

  const chengeJapanese = () => {
    setHeader("ようこそ")
    setBody("https://global.unitednations.entermediadb.net/assets/mediadb/services/module/asset/downloads/preset/Libraries/Production+Library/26-10-2020-Unplash-Japan.jpg/image1024x768.jpg")
  };
  return (
    <UserContext.Provider value={{ body: body,header:header,}}>
    <div className="App">
      <button onClick={chengeEnglish}>English</button>
      <button onClick={chengeArabic}>Arabic</button>
      <button onClick={chengeJapanese}>japanese</button>
      <Header/>
      <Body/>
    </div>
    </UserContext.Provider>
  );
}

export default App;