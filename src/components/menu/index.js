import * as React from 'react';
import {StyleSheet, Image, View, TouchableOpacity, Text} from 'react-native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';

import Home from '../../views/home';
import CatMenuCad from '../../views/catMenuCad';
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

Icon.loadFont();

export default function Menu(){
    return(
        <Drawer.Navigator 
            initialRouteName= "Home"
            drawerStyle={styles.drawerStyle}
            drawerContentOptions={{labelStyle: {color: "white", fontSize: 18}}}
            drawerContent={props => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen 
                name="Home" 
                component={Home}
                options={ {drawerIcon: config => <Icon name="home" size={18}  color="black"/>}}
            />
            <Drawer.Screen 
                name="Nova Categoria" 
                component={CatMenuCad}
                options={ {drawerIcon: config => <Icon name="plus" size={18}  color="black"/>}}
            />
        </Drawer.Navigator>
    )
}

function CustomDrawerContent(props){
    return(
        <DrawerContentScrollView {...props}>
            <ProfileDrawer {...props} />
            <DrawerItemList {...props} />
            <DrawerItem label="Logout" onPress={()=>{props.navigation.navigate("Login")}} labelStyle={ {color:"white", fontSize: 18}} icon={()=> <Icon name="sign-out" size={18}  color="black"/>}/>
        </DrawerContentScrollView>
    )
}

function ProfileDrawer(props){
    return(
        <TouchableOpacity onPress={()=> {props.navigation.navigate("Home")}}>
            <View style={styles.container}>
                <View>
                    <Image source={require("../../../img/logo.png")} style={styles.imageStyle}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        marginTop:10,
        borderWidth:1,
        borderColor:'#7E39FB',
        elevation:6
    },containerText:{
        alignItems: 'center'
    },drawerText:{
        color: 'white',
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: 'black'    
    },
    drawerTextSmall:{
        color: 'white',
        fontSize: 12
    },drawerStyle:{
        width: 250,
        backgroundColor: '#7E39FB'
    },
    container:{
        alignItems: 'center',
        height: 165
    },
    imageStyle:{
        width: 150,
        height:150
    }
})