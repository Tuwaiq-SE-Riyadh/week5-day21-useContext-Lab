import logo from './logo.svg';
import './App.css';
import { createContext,useState } from 'react';
import English from './languages/English';
import Arabic from './languages/Arabic';
import Japanese from './languages/Japanese';

export const LangContext = createContext()


function App() {
  const [lang, GetLang] = useState({english:
    {textE:"Hello World",
    ImgE:"https://cdn.vox-cdn.com/thumbor/GF8Gg9zv_MLPWKA9RJtNM8J5HyU=/0x0:2000x1333/1200x900/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/56328225/190219_10_19_04_5DSR5554.12.jpg"},
  arabic: 
  {textA:"السلام عليكم ورحمة الله وبركاته",
  ImgA:"https://i.ytimg.com/vi/0q06o2IIp8s/maxresdefault.jpg"},
  japanese:
  {textJ:"こんにちは世界",
  ImgJ:"https://d20aeo683mqd6t.cloudfront.net/articles/title_images/000/027/291/original/horyuji-nara-s1453272626.jpg?2020&d=750x400"}
  })

  const [setLang, SetLangInfo] = useState([]);
  // console.log(lang);
  return (
    <>
    <div className="page">
    <LangContext.Provider value={{setLang:setLang,SetLangInfo: SetLangInfo}}>
      <div>
      <div className="btnGrid">
        <English/>
        
        </div>
        </div>
        <label>{setLang[0]}</label>
        <img src={setLang[1]} className="imgV" />

      
    </LangContext.Provider>
    </div>
    </>
  );
}

export default App;
