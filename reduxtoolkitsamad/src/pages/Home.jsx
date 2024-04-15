import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/reducers/index.jsx";

export const Home = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();





const incCounter = () => {
    dispatch(increment())
}


const decCounter = () => {
    dispatch(decrement())
}

return(
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={incCounter}> </button>
        <button onClick={decCounter}> </button>

    </div>
)




}

export default Home;