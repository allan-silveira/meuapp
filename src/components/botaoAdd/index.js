import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';


const BotaoAdd = (props) => {
    const {onPress} = props;
    return(
        <TouchableOpacity onPress={onPress} style={styles.botao}>
            <Text style={styles.textBotao}>+</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    botao:{    
        alignSelf: 'center',
        backgroundColor: '#E4E4E4',
        elevation: 5,
        width: 70,
        height: 70,
        borderRadius: 100
    },
    textBotao:{
        fontWeight:'bold',
        fontSize: 65,
        color: '#DEB40B',
        top: -10,
        textAlign: 'center'
    }
});

export default BotaoAdd;