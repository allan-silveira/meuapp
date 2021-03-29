import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Input = (props) => {
    const {children, labelInput, aviso} = props;
    
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>{labelInput}</Text>
            {children}
            <Text style={styles.textoAviso}>{aviso}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingTop: 5,
        paddingLeft:20,
        paddingRight:20,
        marginTop: 5,
        elevation: 1
    },
    texto:{
        fontSize: 18,
        fontWeight: "bold",
        color: 'white'
    },
    textoAviso:{
        fontSize: 13,
        fontWeight: "bold",
        color: 'white'
    }
});

export default Input;