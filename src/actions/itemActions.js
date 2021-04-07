import firebase from 'firebase';
import {Alert} from 'react-native';

export const SET_ITEM = 'SET_ITEM';
const setItem = item => ({
  type: SET_ITEM,
  item: item
})

export const watchItem = (cat) => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/categorias/${cat.id}/itens`)
      .on('value', snapshot => {
        const itens = snapshot.val();
        const action = setItem(itens);
        dispatch(action);
      })
  }
}


export const deleteItem = (cat, item) =>{
  return dispatch => {
    return new Promise((resolve, reject) => {
      Alert.alert(
        'Exclusão',
        `Deseja excluir o item ${item.title}?`,
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
                .ref(`/users/${currentUser.uid}/categorias/${cat.id}/itens/${item.id}`)
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