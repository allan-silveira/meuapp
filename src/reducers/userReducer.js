import {USER_LOGIN_SUCESS, USER_LOGOUT, USER_CAD_SUCESS} from '../actions'

export default function userReducers(state = null, action) {
    switch(action.type){
        case USER_LOGIN_SUCESS:
            return action.user;
        case USER_LOGOUT:
            return null;
        case USER_CAD_SUCESS:
            return action.user
        default:
            return state;
    }
}