import '../App.css';
import { useContext } from "react";
import { language } from "../App";

function Header(props) {
// 你好，世界
// السلام عليكم
// Hello world
let head = useContext(language);
if(head === 'Arabic'){head = 'السلام عليكم';}
if(head ==='English'){head = 'Hello world';}
if(head ==='Chinese'){head = '你好，世界';}


return <h1>{head}</h1>;


}

export default Header;
