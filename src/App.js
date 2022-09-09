import {connect} from 'react-redux';
import Counter from './views/Counter';
import {increaseAction, decreaseAction, changeFlagAction} from './store/action';

const mapStateToProps = (state) => ({
    count: state.countReducer.count,
    flag: state.flagReducer.flag
})

const mapDispatchToProps = (dispatch) => ({
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction),
    onChangeFlagClick: () => dispatch(changeFlagAction)
})

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)


export default App;