import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const PasswordInput = (props) => {
    const {children, labelInput, aviso} = props;

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>{labelInput}</Text>
            <View style={styles.containerCildren}>
                {children}
            </View>
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
    containerCildren:{
        flex:1,
        width: '100%',
        flexDirection:'row'
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

export default PasswordInput;