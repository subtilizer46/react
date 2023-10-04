import React from "react";
import Bodyleft from "./bodyleft";
import Bodyright from "./bodyright";

const Body = () => {
    return(
        <div>
            <h1>I am a Body Component!!</h1>
            <Bodyleft/>
            <Bodyright/>
        </div>
    )
}

export default Body;