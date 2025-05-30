import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./userSlice";

const User = () => {
    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        dispatch(setUser(e.target.value));
    }
    return(
        <div>
            <input type="text" onChange={handleChange}/>
            <h2>Usuario: {user}</h2>
        </div>
    )
}

export default User;