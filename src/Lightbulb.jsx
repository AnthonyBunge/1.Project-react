import { useState } from "react";

export default function Lightbulb(){

    const [colorchanged, setColorchanged] = useState("#000000")

    function randomColors() {
        setColorchanged('#' + Math.floor(Math.random() * 16777215).toString(16))
}

    return(
        
        <div className="FullWidth">
            <section style={{backgroundColor:colorchanged}} ></section>
            <button id = "ChangeColorBtn" onClick ={() =>  randomColors()}>Change Color</button>
        </div>

    )};