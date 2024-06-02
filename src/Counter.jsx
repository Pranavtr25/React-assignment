import React,{useState} from "react";

function Counter(){
    let [count,setCount] = useState(0)
    const incVal = () => setCount(count+1)
    const decVal = () => setCount(count-1)
    const reset = () => setCount(0)
    return (
        <>
            <div>
                <h3>value : {count}</h3>
                <button onClick={decVal}>➖</button>
               <button onClick={reset}>🔄</button>
               <button onClick={incVal}>➕</button>
            </div>
        </>
    )
}

export default Counter;