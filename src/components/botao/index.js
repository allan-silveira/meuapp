import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';


const Botao = (props) => {
    const {label} = props;
    const {onPress} = props;
    return(
        <TouchableOpacity onPress={onPress} style={styles.botao}>
            <Text style={styles.textBotao}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    botao:{
        padding: 5,
        marginTop: 20,
        width: "30%",
        alignSelf: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#DEB40B',
        borderRadius: 5,
        elevation: 5,
        paddingVertical: 8
    },
    textBotao:{
        fontWeight:'bold',
        fontSize: 18,
        color: 'black',
        alignSelf: 'center'

    }
});

export default Botao;