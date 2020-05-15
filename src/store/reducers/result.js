import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    //const updatedArray = state.results.filter(el => true); //this return a new copy for thet array and for each element 
    // console.log(updatedArray);
    const updatedArray = state.results.filter((result) => result.id !== action.resultElId); //this return a new array with new ubjects without the obj we want to remove 
    return updateObject(state, { results: updatedArray });
}
const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, { results: state.results.concat({ id: new Date(), value: action.result * 2 }) }); //must be concat, push can create un predictable results
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
        default:
            return state;
    }
}

export default resultsReducer;