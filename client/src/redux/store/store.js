import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const middlewares = [reduxThunk];

const composeEnhancer = composeWithDevTools(applyMiddleware(...middlewares));
const store = createStore(rootReducer, composeEnhancer);

export default store;
