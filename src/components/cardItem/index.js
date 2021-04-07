import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const CardItem = (props) => {
    const {onPress, navigation, itemImg, itemNome, itemDesc, deleteItem} = props;
    return(
        <View style={styles.maxContainer} onPress={onPress}> 
            <View>
                <Image source={{uri:itemImg}} style={styles.imageStyle}/>    
            </View>
            <View>
                <View style={styles.container}>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 18}}>{itemNome}</Text> 
                    </View> 
                    
                </View>
                
                <Text style={styles.text}>{itemDesc}</Text> 
                
                <View style={styles.containerIcon}>
                    <View style={{flex:1, flexDirection: 'row'}}>    
                        <TouchableOpacity>
                            <Icon name="pencil" size={25}  color="#7E39FB" onPress={navigation}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Icon name="trash" size={25}  color="#7E39FB"  onPress={deleteItem} style={{marginLeft:20}}/>
                        </TouchableOpacity>
                    </View>
                </View>    
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    maxContainer:{
        backgroundColor: 'white',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        borderRadius: 5,
        flexDirection:'row'
    },
    container:{
        flex: 1,
        alignContent: 'space-between',
        fontSize: 18,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10    
    },
    containerIcon:{
        flexDirection: 'row-reverse',
        alignContent: 'space-between',
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10    
    },
    text:{
        marginLeft: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        fontSize: 16,
        marginBottom: 20
    },
    imageStyle:{
        width: 120,
        height:120,
        flex: 1,
        borderRadius: 5,
    }
})

export default CardItem;