import USERS from '../Data/dummy-data';
import User from '../models/user';
import { ADD_DATA, LOGIN} from './action';

const initialState = {
    avilableUsers: USERS,
    loginSuccess: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DATA:
            const newUser= new User(action.payload.email, action.payload.password);
            return {...state, avilableUsers: state.avilableUsers.concat(newUser), loginSuccess: false};
        case LOGIN:
              const check= state.avilableUsers.find(user => user.email=== action.payload.email);
              let loginSuccess;
              if(check){
              if(check.password === action.payload.password){
                loginSuccess= true;
              }else{
                loginSuccess= false;
              }
            }else {
                loginSuccess= false;
            }
            return {...state,  loginSuccess};

        default:
            return state;

    }
};
export default reducer;