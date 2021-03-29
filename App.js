import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import firebase from 'firebase';

import Login from "./src/views/login";
import Menu from "./src/components/menu";
import Home from "./src/views/home";
import UserCad from "./src/views/userCad";
import CatCad from "./src/views/catCad";
import Item from "./src/views/item";
import ItemCad from "./src/views/itemCad";
import CatAlt from "./src/views/catAlt";
import ItemAlt from "./src/views/itemAlt";
import CatMenuCad from "./src/views/catMenuCad";

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component{
  
  componentDidMount(){
    var firebaseConfig = {
        apiKey: "AIzaSyDGcR9PP66tM8FbFsmoJEZoXtmk3Rj5dQA",
        authDomain: "gerseries-5ec78.firebaseapp.com",
        projectId: "gerseries-5ec78",
        storageBucket: "gerseries-5ec78.appspot.com",
        messagingSenderId: "392940301651",
        appId: "1:392940301651:web:2075e16229164138d845a6",
        measurementId: "G-N6WEQC7HDN"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  }

  render(){
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={ {headerShown: false}}/>
            <Stack.Screen name="UserCad" component={UserCad} options={ {headerShown: false}}/>
            <Stack.Screen name="Menu" component={Menu} options={ {headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={ {headerShown: false}}/>          
            <Stack.Screen name="CatCad" component={CatCad} options={ {headerShown: false}}/>
            <Stack.Screen name="Item" component={Item} options={ {headerShown: false}}/>
            <Stack.Screen name="ItemCad" component={ItemCad} options={ {headerShown: false}}/>
            <Stack.Screen name="CatAlt" component={CatAlt} options={ {headerShown: false}}/>
            <Stack.Screen name="ItemAlt" component={ItemAlt} options={ {headerShown: false}}/>
            <Stack.Screen name="CatMenuCad" component={CatMenuCad} options={ {headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>    
      </>
    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});