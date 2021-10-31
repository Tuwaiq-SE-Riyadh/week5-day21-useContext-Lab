import { useContext } from "react";
import { language } from "../App";


function Body(){
    const lang = useContext(language);
    if(lang == "arabic"){
        return(<img src="https://www.annalindhfoundation.org/sites/default/files/styles/main_image_desktop/public/2020-03/mnzr_2.jpg?itok=a23FBaKW"></img>);

    }
    else if(lang == "english"){
        return(<img src="https://d3dqioy2sca31t.cloudfront.net/Projects/cms/production/000/024/811/slideshow/c56bd725101bef2aaef43b0def6a24c7/england-london-big-ben-river-night.jpg"></img>);

    }
    else if(lang == "japanese"){
        return(<img src="https://www.thoughtco.com/thmb/prEZFvdCw1qaiVHOfkmjDj4IorI=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-579256975-56c35a795f9b5829f86c5b85.jpg"></img>);

    }
}

export default Body;