import React from 'react';
import {useSelector} from "react-redux";

const MyComponent = () => {
    const count = useSelector((state => state.countReducer.count));
    return (
        <div>
            <h1>另一个组件的count:{count}</h1>
        </div>
    );
};

export default MyComponent;
