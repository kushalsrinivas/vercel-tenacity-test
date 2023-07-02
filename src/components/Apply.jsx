import React, { useEffect } from "react";


const Apply=()=>{
    const initGoogle = ()=>{

    }
    useEffect(()=>{
        initGoogle();
    },[])
    const submit =(e)=>{
        e.preventDefault();

    }
    return (
        <>
        <form onSubmit={submit}> 
        <button type="submit">submit</button>
        </form>
        </>
    );
}
export default Apply