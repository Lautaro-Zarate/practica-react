import {useEffect, useRef } from "react";
const CompUseRef = () => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return(
        <div>
            <h1>Ejemplo de useRef</h1>
            <label> Use de useRef
                <input name="" ref={inputRef}/>
            </label>
        </div>
    )
}
export default CompUseRef;