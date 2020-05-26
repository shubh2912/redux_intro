import actionTypes from '../Actions/actionTypes';

const initialState = {
    userData: []
}

export default (state, action) => {
    if (!state) {
        state = initialState;
    }

    switch (action.type) {
        case actionTypes.SAVED_USER_DATA: {
            const userData = [...state.userData];
            userData.push(action.payload);
            state = Object.assign({}, state, {
                userData
            });
        }
            return state;

        default:
            return state;
    }

}