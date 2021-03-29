import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export default function HeaderDrawNavOther({title, navigation}) {
    return(
        <View style={styles.container}>
            
            <View style={styles.containerTitle}>
                
                <TouchableOpacity style={styles.iconStyle}>
                    <Icon name="times" size={25} color="black" onPress={()=> {navigation.pop()}}/>
                </TouchableOpacity>
                <View style={{flex: 2}}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    button: {
        backgroundColor: 'white'
    },
    text:{
        color: 'black',
        padding: 5,
        fontSize: 23,
    },
    containerTitle:{
        flexDirection: 'row-reverse',
        backgroundColor: 'white',
        width: '100%',
    },
    containerButton:{
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingHorizontal: 10
    },
    iconStyle:{
        flex: 1,
        marginTop: 10,
        flexDirection: 'row-reverse',
        marginLeft: 10
    }
})