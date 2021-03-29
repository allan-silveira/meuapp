import * as React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//import firebase from 'firebase';

import HeaderDrawNavOther from '../../components/headerDrawNavOther';
import Input from '../../components/input';
import Botao from '../../components/botao';
import BotaoAddImg from '../../components/botaoAddImg';

import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

export default class ItemCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            descricao: "",
        }
    }

  

    onChangeHandler(field, valor){
        this.setState({
            [field]: valor
        })
    }

    processCad(){       
        this.props.navigation.pop();
    }

    renderButton() {
        if(this.state.isLoading)
            return <ActivityIndicator/>
        return(
            <View style={styles.styleBotao}>
                <Botao label="Salvar" onPress={()=> {this.processCad()}}/>                
            </View>
        )
    }
    render(){
        return(
            <KeyboardAwareScrollView style={{backgroundColor: '#7E39FB'}}>
                <View style={styles.fundo}>
                    <HeaderDrawNavOther title='Novo Item' navigation={this.props.navigation}/>
                    <Input labelInput="Nome:">
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Entre com o nome do produto aqui"
                            value={this.state.email}
                            onChangeText={valor => {this.onChangeHandler('nome', valor)}}
                        />                    
                    </Input>
                    <Input labelInput="Descrição:">
                        <TextInput 
                            style={styles.textInput} 
                            placeholder="Entre com a descrição do produto aqui"
                            value={this.state.descricao}
                            onChangeText={valor => {this.onChangeHandler('descricao', valor)}}
                        />
                    </Input>
                    <BotaoAddImg />
                    {this.renderButton()}
                </View>
            </KeyboardAwareScrollView>
        )
    }
}

const styles = StyleSheet.create({
    textInput:{
        borderWidth: 1,
        borderColor: 'gray',
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    fundo:{
        height: '100%',
        backgroundColor: '#7E39FB'
    },
    styleBotao:{
        marginTop:'20%',
        flex:0.1,
        left: 0,
        right: 0,
        bottom: -10,
        flexDirection:'column',
        height:110,
        alignItems:'center',
    }
})