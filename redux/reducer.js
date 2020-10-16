import { combineReducers } from 'redux';
import authFormReducer from './reducers/auth-form';
import userReducer from './reducers/user';

const reducer = combineReducers({
  authFormReducer,
  userReducer
});

export default reducer;
