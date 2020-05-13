const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1
            };
        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1
            };
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            };
        case 'SUBTRACT':
            return {
                ...state,
                counter: state.counter - action.value
            };
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({ id: new Date(), value: state.counter }) //must be concat, push can create un predictable results
            };
        case 'DELETE_RESULT':
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

export default reducer;