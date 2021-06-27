export const ADD_DATA = 'ADD_DATA';

export const add = (email, password) => {
    return {
        type: ADD_DATA,
        payload: {
            email: email,
            password: password
        }
    };
};