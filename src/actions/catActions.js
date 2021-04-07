import firebase from 'firebase';
import {Alert} from 'react-native';

export const SET_CAT = 'SET_CAT';
const setCat = cat => ({
  type: SET_CAT,
  cat: cat
})

export const watchCat = () => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/categorias`)
      .on('value', snapshot => {
        const categorias = snapshot.val();
        const action = setCat(categorias);
        dispatch(action);
      })
  }
}


export const deleteCat = cat =>{
  return dispatch => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        'Exclusão',
        `Deseja excluir a categoria ${cat.title}?`,
        [{
          text: 'Não',
          onPress: () =>{
            resolve(false);
          },
          style: 'cancel' //IOS
        },{
          text: 'Sim',
          onPress: async () =>{
            const { currentUser } = firebase.auth();
            try{
              await firebase
              .database()
                .ref(`/users/${currentUser.uid}/categorias/${cat.id}`)
                .remove();
              resolve(true);
            }catch(e){
              reject(e);
            }
          }
        }],
        { cancelable: false}
      )
    });
  }
}