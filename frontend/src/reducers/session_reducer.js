import { RECEIVE_USER_LOGOUT, RECEIVE_CURRENT_USER, RECEIVE_USER_SIGN_IN } from '../actions/session_actions';
import { merge } from 'lodash';

const defaultState = {
    isAuthenticated: false,
    user: {}
};

export default function (state = defaultState, action) {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_USER_LOGOUT:
            return ({
                isAuthenticated: false,
                user: undefined
            });

        case RECEIVE_CURRENT_USER:
            return ({
                isAuthenticated: !!action.currentUser,
                user: action.currentUser
            });
        case RECEIVE_USER_SIGN_IN:
            let newState = merge({}, state);
            newState.isSignedIn = true;
            return newState;
        default:
            return state;
    }
}
