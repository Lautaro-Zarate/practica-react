import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset} from "./counterSlice";

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Contador: {count}</h1>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;