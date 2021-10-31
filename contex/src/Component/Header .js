import './component.css'
import Body from './Body'
import {createContext,useState} from 'react'


export const  UserContext =createContext();
function Header(){

    let [user, setUser] = useState();
    function english(){
        console.log("englfe");
        setUser("Hello World")
        
        return <h3>Hello World </h3>
    }
    console.log(user);
    function arabic(){
        console.log("aragfdg");
        setUser("السلام عليكم ورحمة الله وبركاته")
        
        return <h3>السلام عليكم ورحمة الله وبركاته </h3>
    }
    console.log(user);
    
    function franch(){
        setUser("Bonjour le monde")
       
        return <h3>Bonjour le monde </h3>
    }
    console.log(user);

    return( <div>
      
        <UserContext.Provider value={{ user: user, setUser: setUser }}>
      <div>
        <button className="btn" type="button" onClick={english}>English</button>
        <button className="btn" type="button"onClick={arabic} >Arabic</button>
        <button className="btn" type="button" onClick={franch}>Franch</button> 
        <Body/> 
      </div>
    </UserContext.Provider>
       
    </div>
    )
}



export default Header;