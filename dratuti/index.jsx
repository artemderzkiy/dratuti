require("./index.css");
import React from 'react';
import ReactDOM from 'react-dom';
import DratutiPic from "./src/dratutiPic";
//import Counter from "./src/counter";



class Dratuti extends React.Component {
   



render() {
    return (
        <div>
        <div className="jumbotron">
        <h1>дратути))0))</h1>
        <p>Поймай меня если сможешь...</p>
        <p>А в идеале 10 раз))0))0)</p> 
        </div>
         
            <DratutiPic /> 
        </div>
        )
}
}

ReactDOM.render(<Dratuti /> , document.getElementById("app"));

