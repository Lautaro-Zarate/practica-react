import { useState, useEffect } from "react";
import axios from "axios";
const CompConAxios = () => {
    const [datos, setDatos] = useState([]);
    const [error, setError] = useState(null);

    const funcResp = async () => {
        try{
            const respuesta = await axios.get("https://jsonplaceholder.typicode.com/users");
            const data = await respuesta.data;
            console.log(data)
            setDatos(data);
            console.log(datos);
        }
        catch(err){
            console.error("Error en la api", err);
            setError(err);
        }
        finally{
            console.log("Petición finalizada");
        }
    }

    useEffect(() => {
        funcResp();
    }, [])

    if(error){
        return <div>
            <h4>Error en la api</h4>
        </div>
    }

    return(
        <div>
            <h1>Prueba con Axios</h1>
            {datos.map((item) => (
                <div className="card-axios" key={item.id}>
                    <h4>{item.name}</h4>
                    <h6>{item.username}</h6>
                    <p>{item.email}</p>
                    <p>{item.phone}</p>
                </div>
            ))}
            </div>
    )
}
export default CompConAxios;