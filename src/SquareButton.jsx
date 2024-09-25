import { useState } from 'react'

function SquareButton({}){

    const [value, setValue] = useState(null);
    
    function handleClick() {
        setValue("X")
        console.log(">>>XXX<<<");
    }

    return (<button className="square" onClick={handleClick}>{value}</button>)
} 
export default SquareButton