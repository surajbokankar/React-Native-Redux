import { connect } from 'react-redux';

import * as Actions from './ActionTypes';
import CounterComponent from '../Components/CounterComponet';

const mapStateToProps = (state) => ({
     count: state.counterReducer.count,
     isAPISuccess:state.counterReducer.isAPISuccess,
     profileDetail:state.counterReducer.profileDetail

});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({type: Actions.COUNTER_INCREMENT}),
    decrement: () => dispatch({type: Actions.COUNTER_DECREMENT}),
    callapi: () => dispatch({type: Actions.CALL_API}),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);