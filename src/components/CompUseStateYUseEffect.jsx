import { useState, useEffect } from "react"
// export const CompUseStateYUseEffect = () => {
//     const [contador, setContador] = useState(0)
    
//     const sumar = () => {
//         setContador(n => n + 1)
//     }
//     const restar = () => {
//         setContador(n => n - 1)
//     }

//     const reiniciar = () => {
//         setContador(0)
//     }

//     return(
//         <div>
//             <h1>Ejemplo</h1>
//             <div className="contador-container">
//                 <button onClick={restar}>-</button>
//                 <span>{contador}</span>
//                 <button onClick={sumar}>+</button>
//                 <button onClick={reiniciar}>Reiniciar</button>
//             </div>
//         </div>
//     )
// }

// export const CompUseStateYUseEffect = () => {
//     const [loading, setLoading] = useState(true);
//     const [datos, setDatos] = useState([])

    
//     const llamada = async () => {
//         try{
//             const respuesta = await fetch("https://jsonplaceholder.typicode.com/users")
//             const data = await respuesta.json();
//             setDatos(data)
//         }
//         catch(err){
//             console.error("La api falló", err)
//         }
//         finally{
//             setTimeout(() => {
//                 setLoading(false)
//                 console.log("El proceso terminó")
//             }, 2000)
//         }
//     }
    
//     useEffect(() => {
//         llamada()
//     },[])
    
//     if(loading) return <div>Cargando...</div>
    
//     console.log(datos)
//     return(
//         <div className="datos-container">
//             {datos.map((pers) => (
//                 <div key={pers.id} className="datos-card">
//                     <h1>Nombre: {pers.name}</h1>
//                     <p>Empresa: {pers.company.name}</p>
//                     <p>Numero: {pers.phone}</p>
//                 </div>
//             ))}
//         </div>
//     )
// }


export const CompUseStateYUseEffect = () => {
    const [input, setInput] = useState(""); // Lo que el usuario escribe
    const [termino, setTermino] = useState(""); // Lo que se busca (se actualiza al hacer click)
    const [resultados, setResultados] = useState([]); // Lo que responde la API

    const wikiApi = async () => {
        try {
            const resp = await fetch(
                `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${termino}`
            );
            const data = await resp.json();
            setResultados(data.query.search);
        } catch (err) {
            console.log("Error en la búsqueda:", err);
        } finally {
            console.log("El proceso terminó");
        }
    };

    // Llama a la API cuando cambia 'termino'
    useEffect(() => {
        if (termino) {
            wikiApi();
        }
    }, [termino]);

    const handleClick = () => {
        if (input.trim()) {
            setTermino(input); // Dispara la búsqueda
        }
    };

    return (
        <div>
            <h1>Buscador de Wikipedia</h1>
            <label>Buscar: </label>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleClick}>Buscar</button>

            <div>
                {resultados.length > 0 && (
                    <ul>
                        {resultados.map((res) => (
                            <li key={res.pageid}>
                                <strong>{res.title}</strong>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: res.snippet,
                                    }}
                                />
                                <hr />
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};