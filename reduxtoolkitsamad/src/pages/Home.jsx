import React from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/reducers/Counter";

export const Home = () => {
    const state = useSelector((state) => state.counter);
    const dispatch = useDispatch();





const incCounter = () => {
    dispatch(increment())
}


const decCounter = () => {
    dispatch(decrement())
}

return(
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={incCounter}> </button>
        <button onClick={decCounter}> </button>

    </div>
)




}

export default Home;