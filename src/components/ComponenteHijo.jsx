import { useContext } from "react";
import { UserContext } from "../context/UserContext";
const ComponenteHijo = () => {
    const user = useContext(UserContext);
    return(
        <div>
            <h1>Nombre: {user.name}</h1>
            <span>Edad: {user.age}</span>
            <p>Rol: {user.role}</p>
        </div>
    )
}
export default ComponenteHijo;