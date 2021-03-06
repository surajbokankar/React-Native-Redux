import * as Actions from '../Actions/ActionTypes';




const initialState = { count:0,isAPISuccess:false };



const CounterReducer = (state =initialState,action) => {
    switch (action.type){
        case Actions.COUNTER_INCREMENT:
            return {
                count: state.count + 1
            };
        case Actions.COUNTER_DECREMENT:
            return {
                count: state.count - 1
            };
            case Actions.CALL_API: 
                //alert(JSON.stringify(state))
                return{
                    count:state.count,
                    isAPISuccess:true
                };
                
        default:
            return state;
    }
}
export default CounterReducer;