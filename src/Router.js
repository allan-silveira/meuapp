import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./views/login";
import Menu from "./components/menu";
import Home from "./views/home";
import UserCad from "./views/userCad";
import CatCad from "./views/catCad";
import Item from "./views/item";
import ItemCad from "./views/itemCad";
import CatMenuCad from "./views/catMenuCad";

const Stack = createStackNavigator();

export default class AppNavigator extends React.Component{
    
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{ gestureEnabled: false }}
                >
                    <Stack.Screen
                        name="Login"
                        component={Login}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Menu"
                        component={Menu}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="UserCad"
                        component={UserCad}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="CatCad"
                        component={CatCad}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="Item"
                        component={Item}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="ItemCad"
                        component={ItemCad}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="CatMenuCad"
                        component={CatMenuCad}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}