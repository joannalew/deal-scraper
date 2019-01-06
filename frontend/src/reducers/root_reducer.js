import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import search from './search_reducer';

const RootReducer = combineReducers({
    session,
    errors,
    search
});

export default RootReducer;