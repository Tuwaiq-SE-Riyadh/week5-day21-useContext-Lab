import '../App.css';
import Arabic from '../Arabic.jfif';
import English from '../English.jfif';
import Chinese from '../Chinese.jfif';
import { useContext } from "react";
import { language } from "../App";

function Body(props) {
    let s = useContext(language);
//"/static/media/Arabic.c531e3d0.jfif"
///static/media/English.b3be82a1.jfif
///static/media/Chinese.d3df59c9.jfif

if(s === 'Arabic'){ s = "/static/media/Arabic.c531e3d0.jfif"}
if(s === 'English'){ s = "/static/media/English.b3be82a1.jfif"}
if(s === 'Chinese'){ s = "/static/media/Chinese.d3df59c9.jfif"}
    

  return <img src={s} alt={s}/> ;

}

export default Body;
