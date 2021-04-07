import {SET_CAT} from '../actions';


export default function(state = null, action) {
  switch(action.type) {
    case SET_CAT:
      console.log(action.cat);
      return action.cat;
    default:
      return state;
  }
}