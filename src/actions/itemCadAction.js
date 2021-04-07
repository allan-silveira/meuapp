import firebase from 'firebase';

export const ITEM_SET_FIELD = 'ITEM_SET_FIELD';
export const itemsetField = (field, value) => {
    return {
        type: ITEM_SET_FIELD,
        field,
        value
    }
}

export const ITEM_SAVED_SUCCESS = 'ITEM_SAVED_SUCCESS';
export const itemSavedSuccess = () => {
    return {
        type: ITEM_SAVED_SUCCESS
    }
}

export const ITEM_SET_ALL_FIELDS = 'ITEM_SET_ALL_FIELDS';
export const itemsetAllFields = item => ({
    type: ITEM_SET_ALL_FIELDS,
    item: item
});

export const ITEM_RESET_FORM = 'ITEM_RESET_FORM';
export const itemresetForm = () => ({
    type: ITEM_RESET_FORM,
    
});


export const saveItem = (cat, item) => {
    const { currentUser } = firebase.auth();
  
    return async dispatch => {
        if(item.id){
            await firebase
            .database()
            .ref(`/users/${currentUser.uid}/categorias/${cat.id}/itens/${item.id}`)
            .set(item);
        }else{
            await firebase
            .database()
            .ref(`/users/${currentUser.uid}/categorias/${cat.id}/itens`)
            .push(item);
        }
        dispatch(itemSavedSuccess());
    }
    
}