import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const CardCat = (props) => {
    const {onPress, navigation, catItemNum, catNome, catDesc} = props;
    return(
        <TouchableOpacity style={styles.maxContainer} onPress={onPress}>
            <View style={styles.container}>
                <View style={{flex:1, flexDirection: 'row-reverse'}}>
                    <Text style={{fontSize: 18}}>({catItemNum})</Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{fontSize: 18}}>{catNome}</Text> 
                </View>  
            </View>
            <Text style={styles.text}>{catDesc}</Text>
            <View style={styles.containerIcon}>
                <View style={{flex:1, flexDirection: 'row-reverse'}}>
                    <TouchableOpacity>
                        <Icon name="arrow-right" size={25}  color="black" style={{alignSelf: 'flex-end'}} onPress={onPress} />
                    </TouchableOpacity>
                </View>
                <View style={{flex:1, flexDirection: 'row'}}>    
                    <TouchableOpacity>
                        <Icon name="pencil" size={25}  color="#7E39FB" onPress={()=> navigation.navigate('CatAlt')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name="trash" size={25}  color="#7E39FB" style={{marginLeft:20}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    maxContainer:{
        backgroundColor: 'white',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
        borderRadius: 5
    },
    container:{
        flexDirection: 'row-reverse',
        alignContent: 'space-between',
        fontSize: 18,
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
        margin:10, 
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        fontSize: 16,
        marginBottom: 20
    }
});

export default CardCat;