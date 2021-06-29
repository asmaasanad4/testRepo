export const ADD_DATA = 'ADD_DATA';
export const LOGIN = 'LOGIN';

export const add = (email, password) => {
    return {
        type: ADD_DATA,
        payload: {
            email: email,
            password: password
        }
    };
};

export const login = (email, password) => {
    return {
        type: LOGIN,
        payload: {
            email: email,
            password: password
        }
    };
};