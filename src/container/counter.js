
import { useEffect, useState } from "react"
const Counter = () => {
    const[count, setCount] = useState(0);

    useEffect(() => {
        console.log(count, "displayDidMountEffect");

    })

    useEffect(() => {
        console.log(count, "displayWillMountEffect");

    },[count])
    
    const handleAdd=() =>{
        setCount(count + 1); 
}
    const handleDeduct=() => {
        if (count <= 0){
            alert("You cant go below 0");
        }
        else{
        setCount(count - 1);
        }
    }
    return(
        <div>
        <h1>Count: {count}</h1>
        <button onClick = {handleAdd}>Add Count</button>
        <button onClick = {handleDeduct}>Subtract Count</button>
        <button onClick = {()=> setCount(count * 0)}>Reset</button>
</div>
    )
}
export default Counter;
