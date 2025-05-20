import { useCount } from "../hooks/useCount"

export const ComponenteEjemplo = () => {
    const [contador, suma, resta] = useCount(5) 
    return(
        <div>
            <button onClick={resta}>-</button>
            <span>{contador}</span>
            <button onClick={suma}>+</button>
        </div>
    )
}
