import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increaseAction, decreaseAction, assignAction } from "../store/action";
import Split from "./Split";

// redux简单使用

function ReApp(props) {
    const count = useSelector((state => state.countReducer.count));
    const dispatch = useDispatch();
    const [inputVal, setInputVal] = useState(0);
    return (
        <div>
            <div>{count}</div>
            <button onClick={() => {
                dispatch(increaseAction);
            }}>+
            </button>
            <button onClick={() => {
                dispatch(decreaseAction);
            }}>-
            </button>
            <hr />
            {/* 给state赋固定的值 */}
            <form>
                <input type="text" onChange={(event) => setInputVal(event.target.value)} />
                <button type='submit' onClick={(event) => {
                    event.preventDefault();
                    let t = assignAction;
                    t.value = inputVal;
                    console.log(t);
                    dispatch(t);
                }}>更改</button>
            </form>
            <hr />
            <Split />
        </div>
    );
}

export default ReApp;