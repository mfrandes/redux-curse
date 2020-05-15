import * as actionTypes from './actionTypes';

export const saveResult = result => {
    return {
        type: actionTypes.STORE_RESULT,
        result
    };
}

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter; don't over use it not very invdicated
            // console.log(oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    }
};

export const deleteResult = (resultElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId
    };
};