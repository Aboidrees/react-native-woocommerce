import { combineReducers } from 'redux';

import appReducer from './App/App.reducer';
import authReducer from './Auth/Auth.reducer';
import loadingReducer from './Loading/Loading.reducer';

export default combineReducers({
  app: appReducer,
  auth: authReducer,
  loading: loadingReducer
});
