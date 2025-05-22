import { useRef, useState } from "react";
const CompUseRef = () => {
    const currentPageRef = useRef(1);
    const [page, setPage] = useState(1);

    const nextPage = () => {
        currentPageRef.current = currentPageRef.current + 1;
        setPage(currentPageRef.current);
        console.log(currentPageRef.current);
        console.log(`Pasaste a la página ${currentPageRef.current}`);
    }

    const previousPage = () => {
        if(currentPageRef.current === 1){
            console.log("No puedes retroceder más");
            return;
        }
        currentPageRef.current = currentPageRef.current - 1;
        setPage(currentPageRef.current);
        console.log(currentPageRef.current);
        console.log(`Pasaste a la página ${currentPageRef.current}`);
    }

    console.log(currentPageRef.current)
    return(
        <div>
            <h1>Ejemplo de useRef</h1>
            <p>Página con State {page}</p>
            {/* No se renderiza 👇 */}
            <p>Página {currentPageRef.current}</p>
            <button onClick={previousPage}>Volver</button>
            <button onClick={nextPage}>Avanzar</button>
        </div>
    )
}
export default CompUseRef;