import * as actionTypes from '../actions/actionTypes';
const initialState = {
    results: []
};

const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: action.result * 2 }) //must be concat, push can create un predictable results
            };
        case actionTypes.DELETE_RESULT:
            //const updatedArray = state.results.filter(el => true); //this return a new copy for thet array and for each element 
            const updatedArray = state.results.filter((result) => result.id !== action.resultElId); //this return a new array with new ubjects without the obj we want to remove 
            console.log(updatedArray);

            return {
                ...state,
                results: updatedArray
            }
        default:
            return state;
    }
}

export default resultsReducer;