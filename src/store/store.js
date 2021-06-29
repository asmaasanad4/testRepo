import { createStore ,combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducer from './reducer';

const rootReducer = combineReducers({
    fReducer : reducer
});

const Store= createStore(rootReducer, applyMiddleware(ReduxThunk));

export default Store;
