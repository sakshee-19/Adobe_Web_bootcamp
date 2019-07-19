import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import bugsReducer from '../bugTracker/reducer';
import projectReducer from '../project/reducer';


const rootReducer = combineReducers({
	bugsState : bugsReducer,
	projectState: projectReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;