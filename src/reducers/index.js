import { combineReducers } from 'redux';
import userReducer from './userReducer';
import catCadReducer from './catCadReducer';
import catReducer from './catReducer';
import itemReducer from './itemReducer';
import itemCadReducer from './itemCadReducer';

export default combineReducers({
    user: userReducer,
    catForm: catCadReducer,
    listaCat: catReducer,
    itemForm: itemCadReducer,
    listaItem: itemReducer
});