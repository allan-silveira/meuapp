import {SET_ITEM} from '../actions';


export default function(state = null, action) {
  switch(action.type) {
    case SET_ITEM:
      console.log(action.item);
      return action.item;
    default:
      return state;
  }
}