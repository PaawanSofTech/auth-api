import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Combine reducers
const rootReducer = combineReducers({
  // other reducers if any
  form: formReducer, // add redux-form reducer
});

// Create Redux store
const store = createStore(rootReducer);

export default store;
