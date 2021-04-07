import {ITEM_SET_FIELD, ITEM_SAVED_SUCCESS, ITEM_SET_ALL_FIELDS, ITEM_RESET_FORM} from '../actions';


const INITIAL_STATE = {
    id: null,
    title: '',
    description:'',
    img: ''
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case ITEM_SET_FIELD:
            const clonedState = {...state};
            clonedState[action.field] = action.value;
            return clonedState;
        case ITEM_SAVED_SUCCESS:
            return INITIAL_STATE;
        case ITEM_SET_ALL_FIELDS:
            return action.item;
        case ITEM_RESET_FORM:
            return INITIAL_STATE;
        default:
            return state;
    }
}