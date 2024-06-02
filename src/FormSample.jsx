import React,{useState} from "react";

function FormSample(){
    const [name,setName] = useState()
    const [submittedName,setSubmittedName] = useState()
    const displayVal = (event)=> setName(event.target.value)
    const submitVal = () =>setSubmittedName(name)
    return(
        <>
            <input value={name} onChange={displayVal}/>
            <button onClick={submitVal}>submit</button>
            <h2>{submittedName}</h2>
        </>
    )
}

export default FormSample;