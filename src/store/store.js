import { createStore ,combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';

const rootReducer = combineReducers({
    authReducer : reducer
});

const Store= createStore(rootReducer,composeWithDevTools( applyMiddleware(ReduxThunk)));

export default Store;
