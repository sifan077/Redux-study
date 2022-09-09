import React from 'react';

class Counter extends React.Component {
    render() {
        const {count, onIncreaseClick, onDecreaseClick, flag, onChangeFlagClick} = this.props;

        return (
            <div>
                <span>{count}</span>
                <br/>
                <button type="button" onClick={onIncreaseClick}>Increase</button>
                <br/>
                <button type="button" onClick={onDecreaseClick}>Decrease</button>
                <br/>
                {
                    flag ? <h1>True</h1> : <h1>False</h1>
                }
                <button type="button" onClick={onChangeFlagClick}>changeFlag</button>


            </div>
        )
    }
}

export default Counter;