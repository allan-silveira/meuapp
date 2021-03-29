import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

const BotaoAddImg = (props) => {
    const {onPress} = props;
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Foto</Text>
            <TouchableOpacity onPress={onPress} style={styles.botao}>
                <Icon name="caret-right" size={25}  color="black"/>
                <Text style={styles.textBotao}>Adicionar Imagem</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    botao:{
        flexDirection: 'row-reverse',
        alignContent: 'space-between',
        padding: 5,
        marginBottom: 5,
        width: "70%",
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 5,
        paddingVertical: 8
    },
    container:{
        paddingTop: 5,
        paddingLeft:20,
        paddingRight:20,
        marginTop: 5,
        marginBottom: 0,
        elevation: 1
    },
    textBotao:{
        fontWeight:'bold',
        fontSize: 18,
        color: 'black',
        flex: 3
    },
    texto:{
        fontSize: 18,
        fontWeight: "bold",
        color: 'white'
    },
});

export default BotaoAddImg;