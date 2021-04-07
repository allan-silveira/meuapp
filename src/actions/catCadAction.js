import firebase from 'firebase';

export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => {
    return {
        type: SET_FIELD,
        field,
        value
    }
}

export const CAT_SAVED_SUCCESS = 'CAT_SAVED_SUCCESS';
export const catSavedSuccess = () => {
    return {
        type: CAT_SAVED_SUCCESS
    }
}

export const SET_ALL_FIELDS = 'SET_ALL_FIELDS';
export const setAllFields = cat => ({
    type: SET_ALL_FIELDS,
    cat: cat
});

export const RESET_FORM = 'RESET_FORM';
export const resetForm = () => ({
    type: RESET_FORM,
    
});


export const saveCat = cat => {
    const { currentUser } = firebase.auth();
  
    return async dispatch => {
        if(cat.id){
            await firebase
            .database()
            .ref(`/users/${currentUser.uid}/categorias/${cat.id}`)
            .set(cat);
        }else{
            await firebase
            .database()
            .ref(`/users/${currentUser.uid}/categorias`)
            .push(cat);
        }
        dispatch(catSavedSuccess());
    }
    
}