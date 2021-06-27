import { ADD_DATA } from './action';

const initialState = {
    email: '',
    password: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {...state, };

        default:
            return state;

    }
};
export default reducer;